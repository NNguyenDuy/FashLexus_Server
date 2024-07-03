import * as appService from '../services/app'

export const getItemsSearch = async (req, res) => {
  try {
    const searchTerm = req.query.valueSearch
    const responsive = await appService.getItemsSearch(searchTerm)
    const value = {
      categories: [],
      products: [],
    }
    responsive?.map((index) =>
      index.type === 'product'
        ? value.products.push(index)
        : value.categories.push(index)
    )
    return res.status(200).json(value)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot get search Term from app ${error.message}`,
    })
  }
}
