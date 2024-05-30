import { where } from 'sequelize'
import { Op } from 'sequelize'
import db from '../models'

export const getProductsFeatured = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.sequelize.query(
        `
        SELECT p.*, c.Name AS category_name, COUNT(r.id) AS review_count
        FROM Products p
        LEFT JOIN Reviews r ON p.id = r.Product_id
        LEFT JOIN Categories c ON p.Category_id = c.id
        GROUP BY p.id
        ORDER BY p.Sold DESC, review_count DESC
        LIMIT 10;
      `,
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      )

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
      const products = await db.sequelize.query(
        `
        SELECT p.*, c.Name AS category_name, COUNT(r.id) AS review_count
        FROM Products p
        LEFT JOIN Reviews r ON p.id = r.Product_id
        LEFT JOIN Categories c ON p.Category_id = c.id
        GROUP BY p.id
        ORDER BY p.Sold DESC, review_count DESC
        LIMIT 10;
      `,
        {
          type: db.sequelize.QueryTypes.SELECT,
        }
      )

      resolve({
        error: 0,
        message: 'Get products success',
        products,
      })
    } catch (error) {
      reject(error)
    }
  })
