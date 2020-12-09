"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //this will throw a SequelizeUniqueConstraintError if a query is sent with an already existant email
      email: { type: Sequelize.STRING(50), allowNull: false, unique: true },
      username: { type: Sequelize.STRING(50), allowNull: false, unique: true },
      password: { type: Sequelize.STRING(50), allowNull: false },
      address: { type: Sequelize.STRING(300), allowNull: false },
      phoneNumber: { type: Sequelize.INTEGER(20), allowNull: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
