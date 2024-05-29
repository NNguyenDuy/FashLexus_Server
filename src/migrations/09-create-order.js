'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      User_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      Coupon_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Coupons',
          key: 'id'
        }
      },
      Status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Shipping_fee: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Total: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Canceled_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Completed_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Delivery_at: {
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
    await queryInterface.dropTable('Orders');
  }
};
