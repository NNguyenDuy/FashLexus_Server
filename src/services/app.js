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
