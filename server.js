import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes/index.router'
import testConnectDB from './src/config/connectDatabase'
import { connectRedis } from './src/config/redis'

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
  })
)

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
initRoutes(app)
testConnectDB()

const port = process.env.PORT || 8000
const listener = app.listen(port, async () => {
  const redisConnected = await connectRedis()
  if (!redisConnected) {
    console.error(
      'Failed to connect to Redis. Server will start without Redis support.'
    )
  }

  console.log(`Server is running on port ${port}`)
  console.log(
    `Server listening port: http://localhost:${listener.address().port}`
  )
})
