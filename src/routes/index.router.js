import auth from './auth.router'
import user from './user.router'
import data from './data.router'
import product from './product.router'
import category from './category.router'
import review from './review.router'
import appRouter from './app.router'

const initRoutes = (app) => {
  app.use('/api/auth', auth)
  app.use('/api/user', user)
  app.use('/api/system', data)
  app.use('/api/product', product)
  app.use('/api/categories', category)
  app.use('/api/reviews', review)
  app.use('/api/app', appRouter)

  return app.use('/', (req, res) => {
    res.send('Server on...')
  })
}

export default initRoutes
