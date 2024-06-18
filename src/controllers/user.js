import * as userServices from '../services/user'

export const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.user.user
    const response = await userServices.getUserById(id)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      message: `Cannot get user: ${error.message}`,
    })
  }
}
