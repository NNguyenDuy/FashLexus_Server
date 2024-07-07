import express from 'express'
import * as review from '../controllers/review.controller'

const router = express.Router()

router.get('/getTotalReviewProduct', review.getTotalReviewsProduct)
router.get('/getReviewProduct', review.getReviews)
router.post('/createReview', review.createReview)

export default router
