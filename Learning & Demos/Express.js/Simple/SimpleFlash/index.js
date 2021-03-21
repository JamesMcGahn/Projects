// using code from DemoMongoMongoose to test Flash

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');
const Farm = require('./models/farm');
const { render } = require('ejs');

const session = require('express-session');
const flash = require('connect-flash');
app.use(session({ secret: 'notarealsecret', resave: false, saveUninitialized: false }));
app.use(flash());


mongoose.connect('mongodb://localhost:27017/simpleFlash', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("DB Connection Error", err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

// adding a middleware to pass flash
app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
})


//farms
//passing flash through
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    //passing flash through
    //res.render('farms/index', { farms, messages: req.flash('success') });

    //using middleware to pass message
    res.render('farms/index', { farms });
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})


app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save()

    req.flash('success', 'Success you made a new farm')

    res.redirect('/farms');
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
})

app.delete('farms/:id', async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})


app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, id, farm })

})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const newFarmProduct = new Product(req.body);
    farm.products.push(newFarmProduct);
    newFarmProduct.farm = farm;
    await farm.save();
    await newFarmProduct.save();
    res.redirect(`/farms/${farm._id}`);
});




// products
const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });

    }

    // console.log(products);

})

app.get('/products/new', (req, res) => {

    res.render('products/new', { categories });
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    //console.log(newProduct);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const delProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("listening on port 3012");
})