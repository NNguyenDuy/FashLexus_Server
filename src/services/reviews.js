import { raw } from 'express'
import db from '../models'

export const getReviewsProduct = (Product_id, page, pageSize) =>
  new Promise(async (resolve, reject) => {
    try {
      const reviews = await db.sequelize.query(
        'CALL GetProductReviews(:idProduct, :page, :pageSize)',
        {
          replacements: { idProduct: Product_id, page, pageSize },
          type: db.sequelize.QueryTypes.RAW,
        }
      )
      resolve(reviews)
    } catch (error) {
      reject(error)
    }
  })

export const getTotalReviewsProduct = (Product_id) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.sequelize.query(
        'CALL GetTotalAndAVGRatingReviews(:Product_id, @totalReviews, @avgRating);',
        {
          replacements: { Product_id },
        }
      )
      const [outResults] = await db.sequelize.query(
        'SELECT @totalReviews AS totalReviews, @avgRating AS avgRating;'
      )
      resolve(outResults[0])
    } catch (error) {
      reject(error)
    }
  })
