import * as authServices from '../services/auth'

export const register = async (req, res) => {
  const { Fullname, Gmail, Password } = req.body
  try {
    const response = await authServices.registerService({
      Fullname,
      Gmail,
      Password,
    })
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      message: `Cannot register user: ${error.message}`,
    })
  }
}

export const login = async (req, res) => {
  const { Gmail, Password } = req.body
  try {
    const response = await authServices.loginService({
      Gmail,
      Password,
    })
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      message: `Cannot login user: ${error.message}`,
    })
  }
}
