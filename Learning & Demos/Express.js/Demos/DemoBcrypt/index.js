const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { aggregate } = require('./models/user');

mongoose.connect('mongodb://localhost:27017/demoAuth', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("DB Connection Error", err);
    })



app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username, password: hash
    });
    await user.save();
    console.log();
    res.redirect('/secret');
})

app.get('/secret', (req, res) => {
    res.send('secret');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userFind = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, userFind.password)
    if (validPassword) {
        res.send('yay')
    } else {
        res.send('boooo')
    }
})




app.listen(3000, () => {
    console.log('firing on 3000');
})