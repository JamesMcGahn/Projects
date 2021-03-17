const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
    res.render('home');
})



app.listen(3020, (req, res) => {
    console.log("App firing on 3020");
})