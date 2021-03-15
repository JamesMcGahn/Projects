const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.get('/', (req, res) => {
    res.render("home.ejs");
})

// app.get('/tacos', (req, res) => {
//     res.send('GET /tacos response');
// })
// app.post('/tacos', (req, res) => {
//     console.log(req.body);
//     const { meat, qty } = req.body;
//     res.send(`You Ordered ${qty} ${meat} tacos`);
// })



app.listen('3015', () => {
    console.log("Listening on port 3015");
})