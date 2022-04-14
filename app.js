require('dotenv').config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const index = require("./routes/index");
require("./database/index");

const app = express();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));