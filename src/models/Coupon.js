'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    static associate(models) {}
  }
  Coupon.init(
    {
      Coupon_code: DataTypes.STRING,
      Coupon_start_date: DataTypes.DATE,
      Coupon_end_date: DataTypes.DATE,
      Coupon_min_spend: DataTypes.DECIMAL(8, 2),
      Coupon_max_spend: DataTypes.DECIMAL(8, 2),
      Coupon_uses_per_customer: DataTypes.INTEGER,
      Coupon_uses_per_coupon: DataTypes.INTEGER,
      Coupon_status: DataTypes.ENUM('active', 'expired'),
      Deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Coupon',
    }
  )
  return Coupon
}
