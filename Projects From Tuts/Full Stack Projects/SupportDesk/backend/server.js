const path = require('path');
const express = require('express');
const userRouter = require('./routes/userRoutes');
const ticketRouter = require('./routes/ticketRoutes');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleWare');
require('dotenv').config();
const connectDb = require('./config/db');
const PORT = process.env.PORT;
const app = express();

// DB connection
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);

if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' });
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
