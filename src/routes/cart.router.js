import express from 'express'
const router = express.Router()
import * as cart from '../controllers/cart.controller'

router.post('/getCart', cart.getInfoCart)
router.post('/insertCart', cart.insertCart)

export default router
