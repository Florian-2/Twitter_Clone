const path = require("path");

module.exports = {
    dbUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hefps.mongodb.net/twitter?retryWrites=true&w=majority`,
    cert: path.join(__dirname, "../ssl/local.crt"),
    key: path.join(__dirname, "../ssl/local.key"),
}