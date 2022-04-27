const { getAllTweets, getTweetById, createTweet, updateTweet, deleteTweet } = require("../queries/tweets.queries");

exports.getAlltweets = async (req, res, next) => {
    try {
        const tweets = await getAllTweets();
        res.render("tweets/tweet", { tweets, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    } 
    catch (err) {
        next(err);
    }
}

exports.tweetForm = (req, res) => res.render("tweets/tweet-form", { tweet: {}, isAuthenticated: req.isAuthenticated(), currentUser: req.user });

exports.createTweet = async (req, res) => {
    try {
        await createTweet({ ...req.body, author: req.user._id });
        res.redirect("/tweets");
    } 
    catch (err) {
        const errors = Object.keys(err.errors).map((field) => err.errors[field].message);
        res.status(400).render('tweets/tweet-form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    }
}

exports.updateFormTweet = async (req, res, next) => {
    try {
        const tweetID = req.params.tweetID;
        const tweet = await getTweetById(tweetID);
        res.render("tweets/tweet-form", { tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    } 
    catch (err) {
        next(err);
    }
}

exports.updateTweet = async (req, res, next) => {
    const tweetID = req.params.tweetID;

    try {
        await updateTweet(tweetID, req.body);
        res.redirect("/tweets");
    } 
    catch (err) {
        const errors = Object.keys(err.errors).map((field) => err.errors[field].message);
        const tweet = await getTweetById(tweetID);
        res.status(400).render('tweets/tweet-form', { errors, tweet, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    }
}

exports.deleteTweet = async (req, res, next) => {
    try {
        const tweetID = req.params.tweetID;
        await deleteTweet(tweetID);

        const tweets = await getAllTweets();
        res.render("tweets/tweet-list", { tweets })
    } 
    catch (err) {
        next(err);
    }
}