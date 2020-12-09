const Sequelise = require("sequelize");
const sequelize = new Sequelize("team4-database", "8Uri3PqS7d", "gO69Uazj1R", {
  host: "remotemysql.com",
  dialect: "mysql",
});
module.exports = sequelize;
global.sequelize = sequelize;
