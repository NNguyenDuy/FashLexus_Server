import * as cart from '../services/cart.service'

export const getInfoCart = async (req, res) => {
  try {
    const { User_id } = req.body
    const response = await cart.getInfoCart(User_id)
    const data = response.map((value, index) => ({
      key: index,
      detailProduct: {
        productId: value?.id,
        name: value?.Name,
        image: value?.Images ? JSON.parse(value?.Images)[0] : '',
        color: value?.Color,
        size: value?.Size,
      },
      price: value?.Price,
      quantity: value?.Quantity,
    }))
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot get cart ${error.message}`,
    })
  }
}
export const insertCart = async (req, res) => {
  try {
    await cart.insertCart(req.body)
    return res.status(200).json({
      error: 1,
      message: `Insert carted`,
    })
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot insert cart ${error.message}`,
    })
  }
}
