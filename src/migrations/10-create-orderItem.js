'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order_items', {
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
          key: 'id'
        }
      },
      Order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id'
        }
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Price: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Deleted_at: {
        allowNull: false,
        type: Sequelize.DATE,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Order_items');
  }
};
