'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Size: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Colors: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Images: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      Price: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Discount: {
        type: Sequelize.DECIMAL(8, 2),
      },
      Quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Sold: {
        type: Sequelize.INTEGER,
      },
      Status: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Products')
  },
}
