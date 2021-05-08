const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'jamesmcgahn',
        password: '',
        database: 'smart-brain'
    }
});

db.select('*').from('users').then(data => console.log(data))



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
    db('users').returning('*').insert(
        {
            name: req.body.name,
            email: req.body.email,
            joined: new Date()
        }
    ).then(user => res.json(user[0]))
        .catch(err => (res.status(400).json('Unable to register')))
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(400).json('cant find user')
        }
    }).catch(err => (res.status(400).json('error finding user')))
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id).increment('entries', 1)
        .returning('entries').then(entries => res.json(entries[0]))
        .catch(err => (res.status(400).json('error getting entries')))
})

app.listen(3001, () => {
    console.log('app is firing on 3001')
})
