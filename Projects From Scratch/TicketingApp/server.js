const express = require('express');
const app = express();

const port = 5000;

app.get('/api', (req, res) => {
    res.json({ message: 'hi' })
})




app.listen(port, () => {
    console.log(`Server Firing on port: ${port}`);
})