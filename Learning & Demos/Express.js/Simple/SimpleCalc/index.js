const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }))
// app.use(express.json)


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req, res) => {
    let num1 = +req.body.input1;
    let num2 = +req.body.input2;

    res.send(`Result ${num1} + ${num2} = ${num1 + num2}`)
})

app.listen(3000, () => {
    console.log('app firing on 3000')
})