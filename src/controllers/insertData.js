import * as insertServices from '../services/insertData'

export const insert = async (req, res) => {
  try {
    const response = await insertServices.insertData()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      message: `Cannot insert: ${error.message}`,
    })
  }
}
