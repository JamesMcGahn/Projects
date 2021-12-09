const { promisify } = require('util');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const signToken = userId => {
    return jwt.sign(
        {
            id: userId,
            iat: Math.floor(Date.now() / 1000),
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRES,
        },
    );
};

const createToken = (user, statusCode, data, res) => {
    const token = signToken(user._id);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: data,
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

    createToken(newUser._id, 201, {
        user: { name: newUser.name, email: newUser.email },
    }, res);
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return next(new AppError('Please enter both email and password', 400));
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) return next(new AppError('password or email is incorrect', 401));

    createToken(user._id, 200, null, res);
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

exports.restrictTo = (...roles) => {
    return function (req, res, next) {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to access this', 403));
        }
        next();
    };
};

exports.forgotPassowrd = catchAsync(async (req, res, next) => {
    //find user
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(new AppError('User not found', 404));
    //generate pw reset token
    const resetToken = await user.createPwResetToken();
    await user.save({ validateBeforeSave: false });
    // send email
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
    const message = `Reset your password by ${resetURL}`;
    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password has been reset',
            message,
        });
        res.status(200).json({
            status: 'success',
            message: 'Token sent via email',
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new AppError('There was an error sending the email', 500));
    }
});

exports.resetPassowrd = catchAsync(async (req, res, next) => {
    // get user based on token
    const hasedToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');
    const user = await User.findOne(
        {
            passwordResetToken: hasedToken, passwordResetExpires: { $gt: Date.now() },
        },
    );
    // if token not expired, set new password
    if (!user) return next(new AppError('Token is invalid or expired', 400));
    // update changedpw at in user
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    // log the user in
    createToken(user._id, 200, null, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
    // get user
    const user = await User.findById(req.user.id).select('+password');
    // check password
    if (!user || !(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('user or password incorrect', 401));
    }
    // if correct, update pw
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
    // log in user, send jwt
    createToken(user._id, 200, null, res);
});
