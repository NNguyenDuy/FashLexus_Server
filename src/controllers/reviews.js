import * as reviewsService from '../services/reviews'

export const getReviews = async (req, res) => {
  try {
    const { Product_id, page, pageSize } = req.query

    const reviews = await reviewsService.getReviewsProduct(
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
    const totalReviews = await reviewsService.getTotalReviewsProduct(
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
