const Sequelize = require("sequelize");
const sequelize = require("../JEI-e-commerce-backend/server/database/connection");

module.exports = sequelize.define("Cart", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: { type: Sequelize.INTEGER(11), allowNull: false },
  //nb max de produits dans le basket est 27
});
