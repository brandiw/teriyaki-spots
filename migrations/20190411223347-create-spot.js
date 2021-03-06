'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.DECIMAL
      },
      address: {
        type: Sequelize.STRING
      },
      specialty: {
        type: Sequelize.STRING
      },
      sunday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
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
    return queryInterface.dropTable('spots');
  }
};
