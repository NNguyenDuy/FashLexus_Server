'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cart_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
      Cart_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
      },
      Quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Size: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cart_items')
  },
}
