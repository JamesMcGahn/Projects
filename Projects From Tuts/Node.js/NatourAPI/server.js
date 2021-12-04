const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log('Unhandled Exception!');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './.env' });
const app = require('./app');

const DB = process.env.DB_CONNECT.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('connected to DB');
});

// start server
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`app firing on ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('Unhandled rejection!');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
