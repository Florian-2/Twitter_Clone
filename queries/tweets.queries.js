exports.getAllTweets = () => Tweet.find().exec();

exports.createTweet = (data) => Tweet.create({ ...data });