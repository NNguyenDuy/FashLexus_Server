'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shop_user_role extends Model {
    static associate(models) {}
  }
  Shop_user_role.init(
    {
      User_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      Role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'Shop_user_role',
    }
  )
  return Shop_user_role
}
