'use strict'
const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Product, { foreignKey: 'Product_id' })
    }
  }

  Review.init(
    {
      User_id: DataTypes.INTEGER,
      Product_id: DataTypes.INTEGER,
      Rating: DataTypes.INTEGER,
      Title: DataTypes.STRING,
      Content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  )

  return Review
}
