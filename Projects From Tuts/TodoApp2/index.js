const express = require('express');
const path = require('path');

app = express();

let todos = []


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.toLocaleDateString('en-US',
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        })

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