const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("DB Connection Error", err);
    })






app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3012, () => {
    console.log("listening on port 3012");
})