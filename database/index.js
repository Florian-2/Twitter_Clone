const mongosse = require("mongoose");
const env = require(`../environment/${ process.env.NODE_ENV }`);

exports.clientPromise = mongosse.connect(env.dbUrl, {
    useNewUrlParser: true
})
.then((mongoose) => {
    console.log("connection to the database established");
    return mongoose;
})
.catch((err) => console.log(err))