const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');



const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username required']
    },
    password: {
        type: String,
        required: [true, 'pw required']
    },
})

userSchema.statics.findAndValidate = async function (username, password) {
    const userFind = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, userFind.password)

    return validPassword ? userFind : false;

}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    next();
})




const User = mongoose.model('User', userSchema);

module.exports = User;