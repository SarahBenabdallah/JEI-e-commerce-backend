const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("sequelize");
//to access req body
app.use(bodyParser.json());
//connetion to database
require("./database/connection");
module.exports = app;
