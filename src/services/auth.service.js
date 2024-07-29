import db from '../models'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
require('dotenv').config()

const hashPasswordAsync = async (Password) => {
  try {
    const salt = await bcryptjs.genSalt(12)
    return await bcryptjs.hash(Password, salt)
  } catch (error) {
    throw new Error(`Failed to hash password: ${error}`)
  }
}

const jwtSignUser = (user) => {
  return jwt.sign(
    {
      id: user.id,
      Gmail: user.Gmail,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '2d',
    }
  )
}

export const register = async ({ Fullname, Gmail, Password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const [user, created] = await db.User.findOrCreate({
        where: { Gmail },
        defaults: {
          Fullname,
          Gmail,
          Password: await hashPasswordAsync(Password),
        },
      })

      created &&
        (await db.Cart.create({
          User_id: user.id,
          createdAt: Date.now(),
          update: Date.now(),
        }))

      const token = created ? jwtSignUser(user) : null

      resolve({
        message: created
          ? 'User registered successfully'
          : 'Email already exists',
        token: token,
      })
    } catch (error) {
      reject(error)
    }
  })

export const login = ({ Gmail, Password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { Gmail },
      })

      if (!user) throw new Error('Invalid email or password')
      const isPasswordValid = bcryptjs.compareSync(Password, user.Password)
      if (!isPasswordValid) throw new Error('Invalid email or password')

      const token = jwtSignUser(user)

      resolve({
        message: 'User logged in successfully',
        token: token,
      })
    } catch (error) {
      reject(error)
    }
  })
