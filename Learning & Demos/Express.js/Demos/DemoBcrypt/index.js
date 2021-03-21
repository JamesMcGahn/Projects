const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { aggregate } = require('./models/user');
const session = require('express-session');

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
app.use(session({ secret: 'needabettersecret', resave: false, saveUninitialized: false }))


//adding middleware to check for login
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}




app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const valid = await User.findAndValidate(username, password);
    if (valid) {
        req.session.user_id = valid._id;
        res.redirect('/secret')
    } else {
        res.send('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
})



app.listen(3000, () => {
    console.log('firing on 3000');
})