const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const isEmail = (fieldValue) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue);
const isPassword = (fieldValue) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(fieldValue);

const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Pseudo requis"],
        trim: true,
        unique: true
    },
    avatar: { type: String, default: "/images/avatars/default_picture_profile.png" },
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
            validate: [isPassword, "Le mot de passe doit contenir 6 caractères dont 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial"]
        }
    }
})

userSchema.statics.hashPassword = (password) => {
    try {
        return bcrypt.hash(password, 10);
    } 
    catch(e) {
        throw e;
    }
}

userSchema.pre('save', async function (next) {
    // this = document mongoose
    const user = this;

    try {       
        if (!user.isModified('password')) 
            return next();

        const hashPassword = await bcrypt.hash(user.local.password, 10);
        user.local.password = hashPassword;
        next();
    } 
    catch (error) {
        next(error);
    }
})

const Users = mongoose.model("user", userSchema);

module.exports = Users;