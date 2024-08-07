const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
)

const testConnectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection MySQL has been established successfully.')
  } catch (error) {
    console.error('Unable to connect MySQL to the database:', error)
  }
}

export default testConnectDB
