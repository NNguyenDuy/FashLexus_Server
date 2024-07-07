import * as user from '../services/user.service'

export const getUser = async (req, res) => {
  try {
    const { id } = req.user.user
    const userData = await user.getUser(id)
    return res.status(200).json({
      error: 1,
      message: 'Get User success',
      userData,
    })
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot get user: ${error.message}`,
    })
  }
}


