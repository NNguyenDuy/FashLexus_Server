import { createClient } from 'redis'

const redisClient = createClient({
  password: 'oyGTu0S0XRawOMNgwzsdV6Y5nVQSYNKS',
  socket: {
    host: 'redis-10542.c299.asia-northeast1-1.gce.redns.redis-cloud.com',
    port: 10542,
  },
})

redisClient.on('error', (err) => console.log('Redis Client Error', err))

export const connectRedis = async () => {
  try {
    await redisClient.connect()
    console.log('Connected to Redis successfully')
    return true
  } catch (error) {
    console.error('Failed to connect to Redis:', error)
    return false
  }
}

export { redisClient }
