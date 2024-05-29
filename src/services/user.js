import db from '../models'

export const getUserById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ['Password'],
        },
      })
      resolve({
        error: 1,
        message: 'Get User success',
        user,
      })
    } catch (error) {
      reject(error)
    }
  })
