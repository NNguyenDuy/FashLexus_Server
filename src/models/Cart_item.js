'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_item extends Model {
    static associate(models) {}
  }
  Cart_item.init(
    {
      Product_id: DataTypes.INTEGER,
      Cart_id: DataTypes.INTEGER,
      Quantity: DataTypes.INTEGER,
      Price: DataTypes.DECIMAL(8, 2),
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Cart_item',
    }
  );
  return Cart_item;
};
