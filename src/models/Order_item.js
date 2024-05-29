'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order_item extends Model {
    static associate(models) {}
  }
  Order_item.init(
    {
      Product_id: DataTypes.INTEGER,
      Order_id: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      Quantity: DataTypes.INTEGER,
      Price: DataTypes.DECIMAL(8, 2),
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE,
      Deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Order_item',
    }
  )
  return Order_item
}
