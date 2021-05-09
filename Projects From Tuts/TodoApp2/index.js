const express = require('express');

app = express();
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(3000, () => {
    console.log('app firing on 3000')
})