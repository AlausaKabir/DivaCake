const express = require("express");
const bodyParser = require("body-parser");
const welcome = require("../services/welcoming");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", welcome);

app.post("/register");

module.exports = app;
