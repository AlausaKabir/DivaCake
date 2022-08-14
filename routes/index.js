const express = require("express");
const bodyParser = require("body-parser");
const welcome = require("../services/welcoming");
const { userRegistration, userLogin } = require("../controllers/User");
const adminRoute = require("./admin");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", welcome);

app.use("/admin", adminRoute);

app.post("/register", userRegistration);
app.post("/login", userLogin);

module.exports = app;
