const mongosse = require("mongoose");

mongosse.connect("mongodb+srv://Florian:TC5DIBZkMnW9SzUo@cluster0.hefps.mongodb.net/twitter?retryWrites=true&w=majority")
.then(() => console.log("Connection with the database established"))
.catch((err) => console.log(err))