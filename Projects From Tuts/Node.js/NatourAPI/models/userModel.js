const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        trim: true,
        unique: true,
        maxLength: [20, 'A name must have a less or equal then 20 characters'],
        minLength: [3, 'A name must have a minimum of 3 characters'],
        validate: {
            validator: (val) => validator.isAlpha(val, 'en-US', { ignore: ' ' }),
            message: 'A name can only have characters',
        },
    },
    email: {
        type: String,
        required: [true, 'A user must have a email'],
        trim: true,
        unique: true,
        lowercase: true,
        maxLength: [20, 'A email must have a less or equal then 80 characters'],
        minLength: [5, 'A email must have a minimum of 3 characters'],
        validate: {
            validator: (val) => validator.isEmail(val),
            message: 'hmmm..seems your email is a little weird. try again',
        },
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        trim: true,
        unique: true,
        minLength: [8, 'A password must have a minimum of 8 characters'],
    },
    passwordConfirm: {
        type: String,
        required: [true, 'A user must have a password'],
        trim: true,
    },
});

const User = mongoose.model('Tour', userSchema);
module.exports = User;
