'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }
  Order.init(
    {
      User_id: DataTypes.INTEGER,
      Coupon_id: DataTypes.INTEGER,
      Status: DataTypes.STRING,
      Shipping_fee: DataTypes.DECIMAL(8, 2),
      Total: DataTypes.DECIMAL(8, 2),
      Created_at: DataTypes.DATE,
      Canceled_at: DataTypes.DATE,
      Completed_at: DataTypes.DATE,
      Delivery_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  )
  return Order
}
