const mongoose = require('mongoose');

const dailyMessage = new mongoose.Schema({
    author: String,
    dailyMessage: {
        type: String,
        required: true,
        unique: true,
    },
    dateMessage: {
        type: Date,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('DailyMessage', dailyMessage);