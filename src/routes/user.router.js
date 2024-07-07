import express from 'express'
const router = express.Router()
import * as user from '../controllers/user.controller'
import verifyToken from '../middlewares/verifyToken'

router.use(verifyToken)
router.get('', user.getUser)

export default router
