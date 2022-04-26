const router = require("express").Router();
const { getAlltweets, tweetForm, createTweet, updateFormTweet, updateTweet, deleteTweet } = require("../controllers/tweets.controller");

router.get("/", getAlltweets);
router.get("/form", tweetForm);
router.get("/update-form/:tweetID", updateFormTweet);
router.post("/update/:tweetID", updateTweet);
router.post("/create", createTweet);
router.delete("/delete/:tweetID", deleteTweet);

module.exports = router;