const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const database = {
    users: [
        {
            id: 123,
            name: 'John',
            email: 'john@example.com',
            password: 'cheese',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.json("this works")
})

app.post('/signin', (req, res) => {
    console.log(req.body)
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json(database.users[0])
    } else {
        res.status(401).json('error logging in')
    }
})

app.post('/register', (req, res) => {
    database.users.push({
        id: 1234,
        name: req.body.name,
        email: req.body.email,
        entries: 0,
        joined: new Date()
    })
    console.log(req.body)
    res.json(database.users[database.users.length - 1])
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    let found = false;
    database.users.forEach(user => {
        if (user.id === +id) {

            found = true
            return res.json(user)
        }
    })
    if (!found) {
        res.status(400).json('cant find')
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === +id) {

            found = true
            user.entries++
            return res.json(user.entries)
        }
    })
    if (!found) {
        res.status(400).json('cant find')
    }
})

app.listen(3001, () => {
    console.log('app is firing on 3001')
})
