const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("DB Connection Error", err);
    })


const p = new Product({
    name: 'Big Grapes',
    price: 3.45,
    category: 'fruit'
})

// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(e => {
//         console.log(e);
//     })
const seedProducts = [
    {
        name: 'small Grapes',
        price: 1.45,
        category: 'fruit'
    },
    {
        name: 'Tomatoe',
        price: 5.45,
        category: 'vegetable'
    },
    {
        name: 'Celery',
        price: 2.45,
        category: 'vegetable'
    },
    {
        name: 'Spinach',
        price: 2.35,
        category: 'vegetable'
    },
    {
        name: 'Watermelon',
        price: 5.45,
        category: 'fruit'
    }

];

Product.insertMany(seedProducts)
    .then(p => {
        console.log(p);
    })
    .catch(e => {
        console.log(e);
    })