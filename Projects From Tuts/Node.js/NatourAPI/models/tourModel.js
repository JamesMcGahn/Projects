const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const DB = process.env.DB_CONNECT.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('connected to DB');
});

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        trim: true,
        unique: true,
        maxLength: [80, 'A tour must have a less or equal then 80 characters'],
        minLength: [5, 'A tour must have a minimum of 5 characters'],
        validate: [validator.isAlpha, 'tour name only can contain characters'],
    },
    slug: String,
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration'],
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
        enum: {
            values: ['easy, medium, difficult'],
            message: 'A tour must have a difficulty of easy, medium, difficult',
        },
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size'],
    },
    ratingAverage: {
        type: Number,
        required: [true, 'A tour must have a rating'],
        default: 4.5,
        min: [1, 'Rating must be greater than 0'],
        max: [5, 'Rating must be less than 5'],
    },
    ratingQuantity: {
        type: Number,
        required: [true, 'A tour must have a rating'],
        default: 0,
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function (val) {
                // will only work on create
                return val < this.price;
            },
            message: 'Discount price ({VALUE}) must be less than tour price',
        },
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a description'],
    },
    description: {
        type: String,
        trim: true,
    },
    imageCover: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createAt: {
        type: Date,
        default: Date.now(),
    },
    startDates: [Date],
    secretTour: {
        type: Boolean,
        default: false,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// document middleware - before save or create
tourSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7;
});

tourSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

// tourSchema.post('save', function (doc, next) {

// });

// query middleware
tourSchema.pre(/^find/, function (next) {
    this.find({ secretTour: { $ne: true } });
    next();
});

// tourSchema.post('/^find/', function (doc, next) {

// });

// Aggregation middleware
tourSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
    next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
