const { createUser } = require("../queries/users.queries");
const path = require("path");
const multer = require("multer");
const upload = multer({
    storage: multer.diskStorage({
        destination (req, file, cb) {
            cb(null, path.join("public", "images", "avatars"));
        },
        filename (req, file, cb) {
            const cleanFileName = file.originalname.replaceAll(" ", "-");
            cb(null, `${Date.now()}-${cleanFileName}`);
        }
    }),
})

exports.signupForm = (req, res, next) => {
    res.render("users/user-form", { errors: null, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
}

exports.signup = async (req, res, next) => {
    try {
        await createUser(req.body);
        res.redirect("/tweets");
    } 
    catch (err) {
        const errors = Object.keys(err.errors).map((field) => err.errors[field].message);
        res.render("users/user-form", { errors: errors, isAuthenticated: req.isAuthenticated(), currentUser: null });
    }
}

exports.uploadPictureProfile = [
    upload.single("avatar"),
    async (req, res, next) => {
        try {
            const user = req.user;
            user.avatar = path.join("images", "avatars", req.file.filename);
            console.log(user);

            await user.save();
            res.redirect("/");
        } 
        catch (err) {
            next(err);
        }
    }
]