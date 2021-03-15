const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const comments = [
    {
        user: "Bob",
        comment: "i have a turkey for sale",
        id: uuid()
    },
    {
        user: "Joe",
        comment: "i have a pigeon for sale",
        id: uuid()
    },
    {
        user: "hank",
        comment: "i have a raven for sale",
        id: uuid()
    },
    {
        user: "frank",
        comment: "i have a beetle for sale",
        id: uuid()
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
    comments.push({ user, comment, id: uuid() });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { id, comment })
})

app.listen('3015', () => {
    console.log("Listening on port 3015");
})