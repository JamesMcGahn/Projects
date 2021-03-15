const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("new request")
//     // res.send("we got your request")
// })

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`This is a  ${subreddit} subreddit`)
})
app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`This is post ${postID} of the ${subreddit} subreddit`)
})
app.get('/about', (req, res) => {
    res.send('This is about')
})
app.get('/cheese', (req, res) => {
    res.send('This is cheese')
})
app.get('*', (req, res) => {
    res.send('IDK what you are looking for')
})


app.listen(8080, () => {
    console.log("listening on port 8080");
})

