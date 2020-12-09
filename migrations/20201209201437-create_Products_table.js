"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
