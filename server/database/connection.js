const Sequelize = require("sequelize");
const sequelize = new Sequelize("8Uri3PqS7d", "8Uri3PqS7d", "gO69Uazj1R", {
  host: "remotemysql.com",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = sequelize;
global.sequelize = sequelize;
