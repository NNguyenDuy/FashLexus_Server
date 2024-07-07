import express from 'express'
const router = express.Router()
import * as auth from '../controllers/auth.controller'

router.post('/register', auth.register)
router.post('/login', auth.login)

export default router
