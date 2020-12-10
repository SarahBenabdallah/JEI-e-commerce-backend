const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("sequelize");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const commandeRoutes = require("./routes/commandeRoutes");
const userRoutes = require("./routes/userRoutes");

//to access req body
app.use(bodyParser.json());
//connetion to database
require("./database/connection");

/*fixing the cors problem */ /*security breach */ app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/api/products", productRoutes);
app.use("/api/commandes", commandeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
module.exports = app;
