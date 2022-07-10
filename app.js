require('dotenv').config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const index = require("./routes/index");
const errorHandler = require("errorhandler");
require("./database/index");

const app = express();
module.exports = app;

const ENV = process.env.NODE_ENV;

require("./config/session.config");
require("./config/passport.config");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

if (ENV === "development") {
    app.use(errorHandler());
}
else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;

        res.status(code).json({
            code: code,
            message: err.code === 500 && err.message
        })
    })
}