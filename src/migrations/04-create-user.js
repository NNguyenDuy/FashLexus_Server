'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Gmail: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Phone_number: {
        type: Sequelize.STRING,
      },
      Fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Address: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  },
}
