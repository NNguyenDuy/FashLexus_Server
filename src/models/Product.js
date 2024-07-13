'use strict'
const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Review, {
        as: 'Reviews',
        foreignKey: 'Product_id',
      })
      Product.belongsTo(models.Category, {
        foreignKey: 'Category_id',
        as: 'Category',
      })
    }
  }

  Product.init(
    {
      Category_id: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
      Size: DataTypes.TEXT,
      Colors: DataTypes.STRING,
      Images: DataTypes.TEXT,
      Price: DataTypes.DECIMAL(8, 2),
      Discount: DataTypes.DECIMAL(8, 2),
      Quantity: DataTypes.INTEGER,
      Sold: DataTypes.INTEGER,
      Status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  )

  return Product
}
