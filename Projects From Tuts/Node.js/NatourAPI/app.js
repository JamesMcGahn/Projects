const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const AppError = require('./utils/appError');
const globalErrHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARE
// dev logging
if (process.env.NODE_ENV === 'development') {
  // trunk-ignore(eslint/global-require)
  // trunk-ignore(eslint/node/no-unpublished-require)
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// security
app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP',
});

app.use('/api', limiter);

// body parser - reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.static(`${__dirname}/public`));

// Serving Static Files
app.use(express.static(`${__dirname}/public`));

//  ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 404 for bad route requests
app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl}`, 404));
});

// Global Error Handler
app.use(globalErrHandler);

module.exports = app;
