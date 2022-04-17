const router = require("express").Router();
const { getAlltweets, tweetForm, createTweet } = require("../controllers/tweets.controller");

router.get("/", getAlltweets);
router.get("/form", tweetForm);
router.post("/create", createTweet);

module.exports = router;