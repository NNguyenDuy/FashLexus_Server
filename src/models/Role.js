'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {}
  }
  Role.init(
    {
      Role_name: DataTypes.STRING,
      Description: DataTypes.STRING,
      Status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Role',
    }
  )
  return Role
}
