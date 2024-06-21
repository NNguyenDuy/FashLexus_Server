import * as productsServices from '../services/products'

export const getProductsFeatured = async (req, res) => {
  try {
    const response = await productsServices.getProductsFeatured()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}
export const getProductsTrending = async (req, res) => {
  try {
    const response = await productsServices.getProductsTrending()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getProductsNewArrival = async (req, res) => {
  try {
    const response = await productsServices.getProductsNewArrival()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const response = await productsServices.getProduct(id.split('=')[1])
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getProductsCategory = async (req, res) => {
  try {
    const products = await productsServices.getProductsCategory(req.query)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getTotalProductsCategory = async (req, res) => {
  try {
    const products = await productsServices.getTotalProductsCategory(req.query)
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json(error)
  }
}
