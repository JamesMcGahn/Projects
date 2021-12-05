const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = userId => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
    });
    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: {
                name: newUser.name,
                email: newUser.email,
            },
        },
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return next(new AppError('Please enter both email and password', 400));
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) return next(new AppError('password or email is incorrect', 401));
    const token = signToken(user._id);

    res.status(201).json({
        status: 'success',
        token,
    });
});

exports.protect = catchAsync(async (req, res, next) => {
    // get token
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) return next(new AppError('You are not logged in', 401));
    // validate token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
    // check user still exists
    const checkUser = await User.findById(decoded.id);
    if (!checkUser) return next(new AppError('User no longer exists', 401));
    // check user changed password after token issued
    if (await checkUser.changedPassword(decoded.iat)) {
        return next(new AppError('Recently changed password. Please log in again', 401));
    }
    // grant access
    req.user = checkUser;
    next();
});
