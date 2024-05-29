import express from 'express'
import * as insertData from '../controllers/insertData'
const router = express.Router()

router.post('/insert', insertData.insert)

export default router
