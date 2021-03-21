const express = require('express');
const app = express();
const session = require('express-session');


app.use(session({ secret: 'notarealsecret', resave: false, saveUninitialized: false }));
// using memory store -> in prod - must use somewhere (e.g. mongo/ redis) to store the data from the session

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`View count ${req.session.count}`)
})

app.listen(3000, () => {
    console.log('firing on 3000')
})