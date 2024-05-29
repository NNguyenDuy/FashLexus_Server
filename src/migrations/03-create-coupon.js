'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Coupon_code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Coupon_start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Coupon_end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Coupon_min_spend: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Coupon_max_spend: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 2),
      },
      Coupon_uses_per_customer: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Coupon_uses_per_coupon: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Coupon_status: {
        allowNull: false,
        type: Sequelize.ENUM('active', 'expired'),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      Deleted_at: {
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coupons')
  },
}
