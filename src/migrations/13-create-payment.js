'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id'
        }
      },
      Amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Payment_method: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Payment_status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Updated_at: {
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
    await queryInterface.dropTable('Payments');
  }
};
