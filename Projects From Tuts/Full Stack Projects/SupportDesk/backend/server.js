const express = require('express');
const userRouter = require('./routes/userRoutes');
const ticketRouter = require('./routes/ticketRoutes');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleWare');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db');
const PORT = process.env.PORT;
const app = express();

// DB connection
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
app.use('/api/tickets', ticketRouter);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({ message: 'success' });
});

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
