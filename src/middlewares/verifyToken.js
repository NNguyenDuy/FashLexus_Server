import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  try {
    let accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) throw new Error('Missing access token')
    jwt.verify(accessToken, process.env.SECRET_KEY, (error, user) => {
      if (error) {
        if (error.name === 'TokenExpiredError') {
          return res.status(401).json({
            error: 401,
            message: 'Token expired',
          })
        } else {
          return res.status(403).json({
            error: 403,
            message: 'Invalid token',
          })
        }
      }
      req.user = user
      next()
    })
  } catch (error) {
    return res.status(400).json({
      error: -1,
      message: `Cannot access token: ${error.message}`,
    })
  }
}

export default verifyToken
