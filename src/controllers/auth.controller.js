import * as auth from '../services/auth.service'

export const register = async (req, res) => {
  const { Fullname, Gmail, Password } = req.body
  try {
    const response = await auth.register({
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
    const response = await auth.login({
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
