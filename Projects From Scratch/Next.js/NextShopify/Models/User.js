const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email required']
    },
    firstName: {
        type: String,
        required: [true, 'First Name required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name required']
    },
    token: {
        type: String,
    },
    cartId: {
        type: String,
    },
    history: {
        type: Array,
    },
    saveForLater: {
        type: Array,
    },
    wishList: {
        type: Array,
    }
})


UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    next();
})



module.exports = mongoose.models.User ? mongoose.models.User : mongoose.model('User', UserSchema);