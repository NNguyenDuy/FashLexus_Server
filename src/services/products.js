import { where } from 'sequelize'
import { Op } from 'sequelize'
import db from '../models'

export const getProductsFeatured = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.Product.findAll({
        include: [
          {
            model: db.Review,
            as: 'Reviews',
            attributes: [
              [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'reviewCount'],
            ],
            group: ['Product_id'],
            order: [[db.sequelize.literal('reviewCount'), 'DESC']],
            limit: 10,
          },
          {
            model: db.Category,
            as: 'Category',
            attributes: ['Name'],
            required: true,
          },
        ],
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

export const getProductsTrending = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.Product.findAll({
        include: [
          {
            model: db.Review,
            as: 'Reviews',
            attributes: [
              [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'reviewCount'],
            ],
            group: ['Product_id'],
            order: [[db.sequelize.literal('reviewCount'), 'DESC']],
            limit: 10,
          },
          {
            model: db.Category,
            as: 'Category',
            attributes: ['Name'],
            required: true,
          },
        ],
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

export const getProductsNewArrival = () =>
  new Promise(async (resolve, reject) => {
    try {
      const products = await db.Product.findAll({
        include: [
          {
            model: db.Review,
            as: 'Reviews',
            attributes: [
              [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'reviewCount'],
            ],
            group: ['Product_id'],
            order: [[db.sequelize.literal('reviewCount'), 'DESC']],
            limit: 10,
          },
          {
            model: db.Category,
            as: 'Category',
            attributes: ['Name'],
            required: true,
          },
        ],
        where: {
          createdAt: {
            [Op.lte]: new Date(),
          },
        },
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
