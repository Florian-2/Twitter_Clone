const mongosse = require("mongoose");

exports.clientPromise = mongosse.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hefps.mongodb.net/twitter?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})
.then((mongoose) => {
    console.log("connection to the database established");
    return mongoose
})
.catch((err) => console.log(err))