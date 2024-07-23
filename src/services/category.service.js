import db from '../models'
import { redisClient } from '../config/redis'
const CACHE_TTL = 3600

export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    const CACHE_KEY = 'categories'
    try {
      if (redisClient.isReady) {
        const cachedCategories = await redisClient.get(CACHE_KEY)
        if (cachedCategories) {
          try {
            const parsedCategories = JSON.parse(cachedCategories)
            resolve({
              error: 0,
              message: 'Get categories from cache success',
              categories: parsedCategories,
            })
            return
          } catch (parseError) {
            console.error('Error parsing cached categories:', parseError)
          }
        }
      }

      const categories = await db.Category.findAll({
        raw: true,
      })

      if (redisClient.isReady) {
        await redisClient.setEx(
          CACHE_KEY,
          CACHE_TTL,
          JSON.stringify(categories)
        )
      }

      resolve({
        error: 0,
        message: 'Get categories success',
        categories,
      })
    } catch (error) {
      reject({
        error: -1,
        message: 'Failed to get categories',
        details: error.message,
      })
    }
  })
