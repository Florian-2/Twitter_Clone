const { app } = require("../app");
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../database/models/user.model");
const { findUserByEmail } = require("../queries/users.queries");

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Users.findById(id).exec();
        done(null, user);
    } 
    catch (error) {
        done(error);
    }
})

passport.use("local", new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
        const user = await findUserByEmail(email);
        console.log(user);

        if (user) {
            const matchPassword = await bcrypt.compare(password, user.local.password);

            if (matchPassword) {
                done(null, user);
            } 
            else {
                done(null, false, { message: "Mot de passe incorrect." });
            }
        }
        else {
            done(null, false, { message: "Vous n'êtes pas inscrit." });
        }
    } 
    catch (error) {
        done(error);
    }
}))