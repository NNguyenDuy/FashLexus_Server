'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      Password: DataTypes.STRING,
      Gmail: DataTypes.STRING,
      Phone_number: DataTypes.STRING,
      Fullname: DataTypes.STRING,
      Address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}
