"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Commandes", {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Commandes");
  },
};
