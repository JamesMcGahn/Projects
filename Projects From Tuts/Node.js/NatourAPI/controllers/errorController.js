const AppError = require('../utils/appError');

const handleCastError = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};

const handleDuplicateFields = (err) => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new AppError(message, 400);
};

const handleDBValidationError = (err) => {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const handleJsonWebtTokenError = () => new AppError('Invalid Token. Please Login', 401);

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        console.error('error', err);
        res.status(500).json({
            status: 'error',
            message: 'Well, Something went wrong',
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'production') {
        let error = Object.assign(err);
        if (error.name === 'CastError') error = handleCastError(error);
        if (error.name === 'ValidationError') error = handleDBValidationError(error);
        if (error.code === 11000) error = handleDuplicateFields(error);
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') error = handleJsonWebtTokenError(error);
        sendErrorProd(error, res);
    } else if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    }
};
