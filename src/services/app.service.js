import db from '../models'

export const getItemsSearch = (searchTerm) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.sequelize.query('CALL searchItems(:searchTerm)', {
        replacements: { searchTerm },
        type: db.sequelize.QueryTypes.RAW,
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })

export const updateUser = ({ id, Address, Fullname, Phone_number }) =>
  new Promise(async (resolve, reject) => {
    try {
      const userUpdate = await db.User.update(
        {
          Address,
          Fullname,
          Phone_number,
        },
        {
          where: { id },
        }
      )
      resolve(userUpdate)
    } catch (error) {
      reject(error)
    }
  })
