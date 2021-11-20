const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './../../.env' });

const DB = process.env.DB_CONNECT.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('connected to DB');
});

// read files

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// import data

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('loaded');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// delete data

const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('deleted');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);
