'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shop_menu_role extends Model {
    static associate(models) {}
  }
  Shop_menu_role.init(
    {
      Role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Menu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Shop_menu_role',
    }
  )
  return Shop_menu_role
}
