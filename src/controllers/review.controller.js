import * as review from '../services/review.service'

export const getReviews = async (req, res) => {
  try {
    const { Product_id, page, pageSize } = req.query

    const reviews = await review.getReviewsProduct(
      parseInt(Product_id),
      parseInt(page),
      parseInt(pageSize)
    )

    return res.status(200).json(reviews)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot get reviews from product ${error.message}`,
    })
  }
}

export const getTotalReviewsProduct = async (req, res) => {
  try {
    const { Product_id } = req.query
    const totalReviews = await review.getTotalReviewsProduct(
      parseInt(Product_id)
    )
    return res.status(200).json(totalReviews)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot get total reviews from product ${error.message}`,
    })
  }
}

export const createReview = async (req, res) => {
  try {
    const createReview = await review.createReview(req.body)
    return res.status(200).json(createReview)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot create review from product ${error.message}`,
    })
  }
}
