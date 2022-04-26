const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
    content: { 
        type: String,
        required: [true, "Champ requis"],
        trim: true,
        minlength: [1, "Nombre de caractères insuffisants"],
        maxlength: [300, "Le contenu de votre tweet ne doit pas excéder les 300 caractères"]
    }
})

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;