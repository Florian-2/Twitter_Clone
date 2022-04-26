const mongoose = require("mongoose");

const isEmail = (fieldValue) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue);
const isPassword = (fieldValue) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(fieldValue);

const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Username requis"],
        trim: true
    },
    local: {
        email: { 
            type: String,
            required: [true, "Email requis"],
            trim: true,
            lowercase: true,
            unique: true,
            validate: [isEmail, "Le format de l'adresse mail est invalide"]
        },
        password: {
            type: String,
            required: [true, "Mot de passe requis"],
            validate: [isPassword, "Le mot de passe doit contenir 6 caractères dont 1 majuscule, 1 minuscule et 1 chiffre"]
        }
    }
})

const Users = mongoose.model("tweet", userSchema);

module.exports = Users;