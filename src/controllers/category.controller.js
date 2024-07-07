import * as category from '../services/category.service'

export const getCategories = async (req, res) => {
  try {
    const categories = await category.getCategories()
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: 'Get categories failed' + error,
    })
  }
}
