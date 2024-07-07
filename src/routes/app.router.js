import express from 'express'
const router = express.Router()
import * as app from '../controllers/app.controller'

router.get('/search', app.getItemsSearch)
router.put('/updateInfo', app.updateUser)

export default router
