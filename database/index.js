const mongosse = require("mongoose");

mongosse.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hefps.mongodb.net/twitter?retryWrites=true&w=majority`)
.then(() => console.log("Connection with the database established"))
.catch((err) => console.log(err))