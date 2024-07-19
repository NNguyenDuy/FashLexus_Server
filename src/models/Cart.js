'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.User, { foreignKey: 'User_id' })
    }
  }

  Cart.init(
    {
      User_id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  )

  return Cart
}
