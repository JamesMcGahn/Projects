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
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            bcrypt.compare(req.body.password, data[0].hash, function (err, result) {
                if (result) {
                    return db.select('*').from('users').where('email', '=', req.body.email)
                        .then(user => res.json(user[0]))
                        .catch(err => res.status(400).json('unable to get user'))
                } else {
                    res.status(400).json('wrong combination')
                }
            })
        })
        .catch(err => res.status(400).json('error loggin in'))

})





app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, function (err, hash) {
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            })
                .into('login')
                .returning('email')
                .then(loginEmail => {
                    return trx('users')
                        .returning('*')
                        .insert({
                            email: loginEmail[0],
                            name: name,
                            joined: new Date()
                        })
                        .then(user => {
                            res.json(user[0]);
                        })
                })
                .then(trx.commit)
                .catch(trx.rollback)
        }).catch(err => res.status(400).json('unable to register'))
    })




    // db('users')
    //     .catch(err => (res.status(400).json('Unable to register')))
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
