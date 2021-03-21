const express = require('express');
var cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('thisismysecret'));
// use cookie-signature for real hashing
app.get('/greet', (req, res) => {
    //const { name = 'Stranger' } = req.cookies;
    const { name = 'Stranger' } = req.signedCookies;
    res.send(`Hi ${name}`)
})

app.get('/setname', (req, res) => {
    // res.cookie('name', 'stevie chicks');
    res.cookie('name', 'stevie chicks', { signed: true });
    res.send('ok send a cookie');
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('firing on 3000')
})