const mongoose = require('mongoose');

const user = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model('User', user);