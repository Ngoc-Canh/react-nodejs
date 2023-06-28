const express = require("express");
const morgan = require("morgan");
const db = require("./config/db/index");

const app = express();
const port = 3000;

db.connectMongo();

app.use(morgan("combined"));

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/tin-tuc", (req, res) => res.send("Hello, world!"));

app.listen(port, () => console.log(`first listen ${port}`));
