import * as product from '../services/product.service'

export const getProductsFeatured = async (req, res) => {
  try {
    const response = await product.getProductsFeatured()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}
export const getProductsTrending = async (req, res) => {
  try {
    const response = await product.getProductsTrending()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getProductsNewArrival = async (req, res) => {
  try {
    const response = await product.getProductsNewArrival()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const response = await product.getProduct(id.split('=')[1])
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getProductsCategory = async (req, res) => {
  try {
    const products = await product.getProductsCategory(req.query)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getTotalProductsCategory = async (req, res) => {
  try {
    const products = await product.getTotalProductsCategory(req.query)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json(error)
  }
}
