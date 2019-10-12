const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 64
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});


const Team = mongoose.model('Team', userSchema);

module.exports.Team = Team;
