"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ProductUsers", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: Sequelize.STRING(25), allowNull: false },
      quantity: { type: Sequelize.INTEGER(2), allowNull: true },
      category: { type: Sequelize.STRING(25), allowNull: false },
      description: { type: Sequelize.STRING(300), allowNull: false },
      price: { type: Sequelize.INTEGER(10), allowNull: false },
      image: { type: Sequelize.STRING(300), allowNull: false },
      userId: { type: Sequelize.INTEGER(11), allowNull: true },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ProductUsers");
  },
};
