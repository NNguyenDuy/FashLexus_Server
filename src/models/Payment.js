'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {}
  }
  Payment.init(
    {
      Order_id: DataTypes.INTEGER,
      Amount: DataTypes.DECIMAL(8, 2),
      Payment_method: DataTypes.STRING,
      Payment_status: DataTypes.STRING,
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
