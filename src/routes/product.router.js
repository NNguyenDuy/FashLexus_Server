import express from 'express'
const router = express.Router()
import * as product from '../controllers/product.controller'

router.get('/featured-products', product.getProductsFeatured)
router.get('/trending-products', product.getProductsTrending)
router.get('/new-arrival-products', product.getProductsNewArrival)
router.get(`/details/:id`, product.getProduct)
router.get('/category', product.getProductsCategory)
router.get('/categoryTotal', product.getTotalProductsCategory)

export default router
