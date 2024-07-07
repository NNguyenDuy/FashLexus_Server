import * as app from '../services/app.service'

export const getItemsSearch = async (req, res) => {
  try {
    const searchTerm = req.query.valueSearch
    const responsive = await app.getItemsSearch(searchTerm)
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

export const updateUser = async (req, res) => {
  try {
    await app.updateUser(req.body)
    return res.status(200).json({
      error: 1,
      message: 'User updated successfuly',
    })
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot update user: ${error.message}`,
    })
  }
}
