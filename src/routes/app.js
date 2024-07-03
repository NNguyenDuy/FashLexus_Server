import express from 'express'
const router = express.Router()
import * as appController from '../controllers/app'

router.get('/search', appController.getItemsSearch)

export default router
