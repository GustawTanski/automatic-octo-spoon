const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://user1:user1@cluster0-rh62n.mongodb.net/test?retryWrites=true&w=majority')
        console.log('Connected to MongoDB...');
    } catch (err) {
        console.error('Connection failed...', err);
    }
}

module.exports.connectToDB = connectToDB;
