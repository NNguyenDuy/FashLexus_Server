import express from 'express'
import * as productsController from '../controllers/products'
const router = express.Router()

router.get('/featured-products', productsController.getProductsFeatured)
router.get('/trending-products', productsController.getProductsTrending)
router.get('/new-arrival-products', productsController.getProductsNewArrival)
router.get(`/details/:id`, productsController.getProduct)

export default router
