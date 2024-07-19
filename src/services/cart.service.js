import db from '../models'

export const getInfoCart = (User_id) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.sequelize.query('CALL getInfoCart(:User_id)', {
        replacements: { User_id },
        type: db.sequelize.QueryTypes.RAW,
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })

export const insertCart = ({
  User_id,
  Cart_id,
  Product_id,
  Quantity,
  Color,
  Size,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.sequelize.query(
        'CALL insertCart(:User_id, :Cart_id, :Product_id, :Quantity, :Color, :Size)',
        {
          replacements: { User_id, Cart_id, Product_id, Quantity, Color, Size },
          type: db.sequelize.QueryTypes.RAW,
        }
      )
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
