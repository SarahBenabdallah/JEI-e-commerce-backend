const Sequelize = require("sequelize");
const sequelize = require("../back/JEI-e-commerce-backend/server/database/connection");

module.exports = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  //this will throw a SequelizeUniqueConstraintError if a query is sent with an already existant email
  email: { type: Sequelize.STRING(50), allowNull: false, unique: true },
  username: { type: Sequelize.STRING(50), allowNull: false, unique: true },
  address: { type: Sequelize.STRING(300), allowNull: false },
  phoneNumber: { type: Sequelize.INTEGER(20), allowNull: false },
});
