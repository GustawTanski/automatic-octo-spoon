const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        unique: true
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
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

async function createUser(name, email, password, isBoss) {
    const user = new User({
        name: name,
        email: email,
        password: password,
        isBoss: isBoss
    })

    try {
        const result = await user.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

module.exports.createUser = createUser;
