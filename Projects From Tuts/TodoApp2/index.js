const express = require('express');
const path = require('path');
const date = require(__dirname + '/date.js');
app = express();

const todos = []


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const day = date.getDate();
    res.render("list", { today: day, todos: todos })
})

app.post('/', (req, res) => {
    const newItem = req.body.newItem
    todos.push(newItem)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('app firing on 3000')
})