'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Category_path: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Description: {
        type: Sequelize.STRING,
      },
      Status: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories')
  },
}
