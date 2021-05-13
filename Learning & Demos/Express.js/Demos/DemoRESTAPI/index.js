const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const wikiSchema = new Schema({
    title: String,
    content: String,
});

const Article = mongoose.model('article', wikiSchema)

app.route('/articles')
    .get(async (req, res) => {
        const articles = await Article.find({})
        res.send(articles)
    })
    .post(async (req, res) => {
        const { title, content } = req.body
        const article = {
            title: title,
            content: content
        }
        newArticle = new Article(article)
        await newArticle.save();
        res.redirect('/articles')
    })
    .delete(async (req, res) => {
        await Article.deleteMany({})
        res.redirect('/articles')
    })

app.route('/articles/:article')
    .get(async (req, res) => {
        const article = await Article.find({ title: req.params.article })
        res.send(article)
    })
    .put(async (req, res) => {
        const { title, content } = req.body
        const article = {
            title: title,
            content: content
        }
        const updatedArticle = await Article.findOneAndUpdate({ title: req.params.article }, article, { runValidators: true })
        res.send(updatedArticle)
    })
    .delete(async (req, res) => {
        const deletedArticle = await Article.findOneAndDelete({ title: req.params.article })
        res.send(deletedArticle)
    })


app.listen(3000, () => {
    console.log('firing heavy on 3k')
})