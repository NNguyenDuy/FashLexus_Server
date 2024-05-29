import express from 'express'
const router = express.Router()
import * as categoriesController from '../controllers/categories'

router.get('/getAll', categoriesController.getCategoriesController)

export default router
