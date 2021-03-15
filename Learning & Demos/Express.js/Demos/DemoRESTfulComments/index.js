const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const comments = [
    {
        user: "Bob",
        comment: "i have a turkey for sale"
    },
    {
        user: "Joe",
        comment: "i have a pigeon for sale"
    },
    {
        user: "hank",
        comment: "i have a raven for sale"
    },
    {
        user: "frank",
        comment: "i have a beetle for sale"
    },

]
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs')
})

app.post('/comments', (req, res) => {
    const { username: user, comment } = req.body;
    comments.push({ user, comment });
    res.redirect('/comments');
})



app.listen('3015', () => {
    console.log("Listening on port 3015");
})