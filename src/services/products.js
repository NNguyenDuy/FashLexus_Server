import db from '../models'

export const getProductsFeatured = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.sequelize.query('CALL GetTopProducts()', {
        type: db.sequelize.QueryTypes.RAW,
      })

      resolve({
        error: 0,
        message: 'Get products success',
        products,
      })
    } catch (error) {
      reject(error)
    }
  })  

export const getProductsNewArrival = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.Product.findAll({
        order: [['createdAt', 'DESC']],
        limit: 10,
      })
      resolve({
        error: 0,
        message: 'Get products success',
        products,
      })
    } catch (error) {
      reject(error)
    }
  })

export const getProduct = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const product = await db.Product.findOne({ where: { id } })
      resolve({
        error: 0,
        message: 'Get product success',
        product,
      })
    } catch (error) {
      reject(error)
    }
  })

export const getProductsTrending = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.sequelize.query('CALL GetTrendingProducts()', {
        type: db.sequelize.QueryTypes.RAW,
      })

      resolve({
        error: 0,
        message: 'Get products success',
        products,
      })
    } catch (error) {
      reject(error)
    }
  })
