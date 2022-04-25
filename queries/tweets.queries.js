const Tweet = require("../database/models/tweet.model");

exports.getAllTweets = () => Tweet.find().exec();

exports.getTweetById = (id) => Tweet.findById(id).exec();

exports.createTweet = (data) => Tweet.create({ ...data });

exports.updateTweet = (id, data) => {
    // Par défaut findByIdAndUpdate() ne vérifie par que les donnée soit correcte, pour réglé ça on peut utilise l'option { runValidators: true } qui va lancer l'exécution des validator.
   return Tweet.findByIdAndUpdate(id, { $set: { content: data.content } }, { runValidators: true }).exec();
}

exports.deleteTweet = (id) => Tweet.findByIdAndDelete(id).exec();