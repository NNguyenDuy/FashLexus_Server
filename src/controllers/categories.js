import * as categoriesServices from '../services/categories'

export const getCategoriesController = async (req, res) => {
  try {
    const categories = await categoriesServices.getCategories()
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: 'Get categories failed' + error,
    })
  }
}
