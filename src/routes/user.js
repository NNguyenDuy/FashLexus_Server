import express from 'express'
const router = express.Router()
import * as userController from '../controllers/user'
import verifyToken from '../middlewares/verifyToken'

router.use(verifyToken)
router.get('', userController.getUserByIdController)

export default router
