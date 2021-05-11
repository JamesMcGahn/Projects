if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const date = require(__dirname + '/date.js');

app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/todolistDB';

mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const itemsSchema = {
    todo: String
};

const Item = mongoose.model('item', itemsSchema)

app.get('/', async (req, res) => {
    const day = date.getDate();
    const todos = await Item.find({}, (err, result) => {
        if (err) { console.error(err) }
    })

    res.render("list", { today: day, todos: todos })
})

app.post('/delete/:id', async (req, res) => {
    const id = req.params.id
    const item = await Item.findByIdAndDelete(id)
    res.redirect('/')
})

app.post('/', async (req, res) => {
    const newItem = req.body.newItem
    Item.create({ todo: newItem }, (err) => {
        err ? console.log(err) : ''
    })
    res.redirect('/')
})


app.listen(PORT, () => {
    console.log(`app firing on ${PORT}`)
})