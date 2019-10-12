const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 64
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 512
    },
    isBoss: {
        type: Boolean,
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    position: {
        type: String,
        minlength: 4,
        maxlength: 64
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.method('hashPassword', async function () {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;
