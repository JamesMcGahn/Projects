const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes')
const tourRouter = require('./routes/tourRoutes')
const app = express();

//middleware
app.use(morgan('dev'))
app.use(express.json());
app.use((req, res, next) => {
    console.log('middleware')
    next()
})


//routes

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

// start server    
const port = 3000;
app.listen(port, () => {
    console.log(`app firing on ${port}`);
})

