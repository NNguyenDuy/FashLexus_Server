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

export const getProductsCategory = ({
  category,
  searchName,
  minPrice,
  maxPrice,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      let query = `
      SELECT p.*, c.Category_path FROM Products p
      JOIN Categories c ON c.id = p.Category_id
      WHERE c.Category_path = '${category}'`

      if (searchName && searchName != '')
        query += ` AND p.Name LIKE '%${searchName}%'`
      if (minPrice && maxPrice)
        query += ` AND p.Price BETWEEN ${minPrice} AND ${maxPrice}`

      const [products] = await db.sequelize.query(query, {
        type: db.sequelize.QueryTypes.RAW,
      })
      resolve({
        error: 0,
        message: 'Get products category success',
        products,
      })
    } catch (error) {
      reject(error)
    }
  })
