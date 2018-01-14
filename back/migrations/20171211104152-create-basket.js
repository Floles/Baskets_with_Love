'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marques: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
      }},
      type: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
      }},
      couleurs: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
      }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Baskets');
  }
};