const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');
const knex = require('knex');
const dotenv = require('dotenv').config()
const { registerHandler } = require('./controller/register');
const { signinHandler } = require('./controller/signin');
const { imageHandler, handleAPICall } = require("./controller/image");
const { profileHandler } = require("./controller/profile");
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
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

app.post('/signin', (req, res) => { signinHandler(req, res, db, bcrypt) })

app.post('/register', (req, res) => { registerHandler(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profileHandler(req, res, db) })

app.put('/image', (req, res) => { imageHandler(req, res, db) })

app.post('/imageurl', (req, res) => { handleAPICall(req, res) })


app.listen(process.env.PORT || 3001, () => {
    console.log('app is firing on 3001')
})
