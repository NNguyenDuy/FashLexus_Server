import express from 'express'
import * as data from '../controllers/data.controller'
const router = express.Router()

router.post('/insert', data.insert)

export default router
