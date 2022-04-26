const { createUser } = require("../queries/users.queries");

exports.signupForm = (req, res, next) => {
    res.render("users/user-form", { errors: null });
}

exports.signup = async (req, res, next) => {
    try {
        await createUser(req.body);
        res.redirect("/tweets");
    } 
    catch (err) {
        const errors = Object.keys(err.errors).map((field) => err.errors[field].message);
        res.render("users/user-form", { errors: errors });
    }
}