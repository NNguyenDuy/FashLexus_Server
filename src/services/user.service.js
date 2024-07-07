import db from '../models'

export const getUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ['Password'],
        },
      })
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
