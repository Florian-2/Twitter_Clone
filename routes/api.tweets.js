const router = require("express").Router();
const Tweet = require("../database/models/tweet.model");

router.post("/", (req, res) => {
    const body = req.body;

    Tweet.create({ content: body.content })
        .then(() => res.redirect("/"))
        .catch((err) => {
            const errorFieldContent = err.errors["content"].message;

            res.status(400).render("tweets/tweet-form", { errContent: errorFieldContent });
        });
})

module.exports = router;