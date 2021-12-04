const AppError = require('../utils/appError');

const handleCastError = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`;
    console.log('imaewew', message);
    return new AppError(message, 400);
};

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
        sendErrorProd(error, res);
    } else if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    }
};
