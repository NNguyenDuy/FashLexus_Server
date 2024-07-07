import express from 'express'
const router = express.Router()
import * as category from '../controllers/category.controller'

router.get('/getAll', category.getCategories)

export default router
