const Tweet = require("../database/models/tweet.model");
const { getAllTweets, createTweet } = require("../queries/tweets.queries");

exports.getAlltweets = async (req, res, next) => {
    try {
        const tweets = await getAllTweets();
        res.render("tweets/tweet-list", { tweets });
    } 
    catch (err) {
        next(err);
    }
}

exports.tweetForm = (req, res, next) => {
    res.render("tweets/tweet-form");
}

exports.createTweet = async (req, res, next) => {
    try {
        await createTweet(req.body);
        res.redirect("/tweets");
    } 
    catch (err) {
        const errors = Object.keys(err.errors).map((field) => err.errors[field].message);
        res.status(400).render('tweets/tweet-form', { errors });
    }
}