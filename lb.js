import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

const servers = ['http://localhost:5001', 'http://localhost:5002']
let current = 0

app.setMaxListeners(20)

const proxy = (req, res, next) => {
  const target = servers[current]
  current = (current + 1) % servers.length
  createProxyMiddleware({ target, changeOrigin: true })(req, res, next)
}

app.use(proxy)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Load balancer listening on port ${port}`)
})
