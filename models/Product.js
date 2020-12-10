const Sequelize = require("sequelize"); 
const db = require('../server/database/connection')
module.exports = db.define("Product", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: Sequelize.STRING(25), allowNull: false },
  category: { type: Sequelize.STRING(25), allowNull: false },
  description: { type: Sequelize.STRING(300), allowNull: false },
  price: { type: Sequelize.INTEGER(10), allowNull: false },
  image: { type: Sequelize.STRING(300), allowNull: false },
});
