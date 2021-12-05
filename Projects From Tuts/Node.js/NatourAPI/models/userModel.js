const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        trim: true,
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
        minLength: [8, 'A password must have a minimum of 8 characters'],
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'A user confirm their password'],
        validate: {
            // only works on save and create
            validator: function (val) {
                return val === this.password;
            },
            message: 'looks like your passwords do not match',
        },
        select: false,
    },
});

userSchema.pre('save', async function (next) {
    //only run if pw is modified
    if (!this.isModified('password')) return next();
    // hash 12 and delete confirm
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function (passwordAttempt, userPassword) {
    return await bcrypt.compare(passwordAttempt, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
