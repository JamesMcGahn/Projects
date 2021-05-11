if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const _ = require("lodash");
const mongoose = require('mongoose');
const app = express();


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'))

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/blogsDB';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const blogsSchema = {
  title: String,
  body: String,
};

const Blog = mongoose.model('blog', blogsSchema);


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

app.get('/', async (req, res) => {

  const posts = await Blog.find({}, (err, result) => {
    if (err) { console.error(err) }
  })
  res.render('home', { posts: posts })
})

app.get('/contact', (req, res) => {
  res.render('contact', { content: homeStartingContent })
})
app.get('/about', (req, res) => {
  res.render('about', { content: contactContent })
})
app.get('/compose', (req, res) => {
  res.render('compose', { content: contactContent })
})
app.post('/compose', async (req, res) => {

  const title = req.body.postTitle
  const body = req.body.postBody
  Blog.create({
    title: title,
    body: body
  }, (err) => {
    err ? console.log(err) : console.log('success')
  })
  res.redirect('/');
})

app.get('/posts/:title/:id', async (req, res) => {
  const id = req.params.id
  const post = await Blog.findById(id)
  console.log(post)
  if (post) {
    res.render('post', { post: post })
  } else {
    res.status(404).redirect('/')
  }

})



app.listen(PORT, () => {
  console.log(`app firing on ${PORT}`)
})