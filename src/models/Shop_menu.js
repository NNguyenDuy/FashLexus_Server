'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shop_menu extends Model {
    static associate(models) {}
  }
  Shop_menu.init(
    {
      Path: DataTypes.STRING,
      Description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shop_menu',
    }
  )
  return Shop_menu
}
