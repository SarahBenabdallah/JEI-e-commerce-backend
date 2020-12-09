const Sequelize = require("sequelize");
const sequelize = require("../back/JEI-e-commerce-backend/server/database/connection");
module.exports = sequelize.define("Commande", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderDate: { type: Sequelize.DATE, allowNull: false },
  deliveryDate: { type: Sequelize.DATE, allowNull: false },
  cartId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
});
