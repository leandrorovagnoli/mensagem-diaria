const mongoose = require('mongoose');

const dailyMessage = new mongoose.Schema({
    author: String,
    message: String,
    day: Number
})

module.exports = mongoose.model('DailyMessage', dailyMessage);