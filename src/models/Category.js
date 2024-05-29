'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {}
  }
  Category.init(
    {
      Name: DataTypes.STRING,
      Category_path: DataTypes.STRING,
      Description: DataTypes.STRING,
      Status: DataTypes.INTEGER,
      Image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  )
  return Category
}
