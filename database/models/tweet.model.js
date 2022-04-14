const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
    content: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 140
    }
})

const Tweet = mongoose.Model("tweet", tweetSchema);

module.exports = Tweet;