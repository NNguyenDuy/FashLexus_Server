import db from '../models'

export const getUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        attributes: {
          exclude: ['Password'],
        },
        include: [
          {
            model: db.Cart,
            where: { User_id: id },
            attributes: [['id', 'Cart_id']],
            required: false,
          },
        ],
      })
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
