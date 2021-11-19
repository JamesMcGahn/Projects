const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = require('./app');

const DB = process.env.DB_CONNECT.replace('<PASSWORD>', process.env.DB_PASSWORD);

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
    },
    rating: {
        type: Number,
        required: [true, 'A tour must have a rating'],
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price'],
    },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: 'Test Tour 2',
    rating: 4.5,
    price: 324,
});

testTour.save().then((doc) => {
    console.log(doc);
}).catch(err => console.log(err));

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('connected to DB');
});

// start server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`app firing on ${port}`);
});
