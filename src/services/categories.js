import db from '../models'

export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const categories = await db.Category.findAll({
        raw: true,
      })
      resolve({
        error: 1,
        message: 'Get categories success',
        categories,
      })
    } catch (error) {
      reject(error)
    }
  })
