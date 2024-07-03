import authRouter from './auth'
import userRouter from './user'
import insertRouter from './insert'
import productRouter from './product'
import categoriesRouter from './categories'
import reviewsRouter from './reviews'
import appRouter from './app'

const initRoutes = (app) => {
  app.use('/api/auth', authRouter)
  app.use('/api/user', userRouter)
  app.use('/api/system', insertRouter)
  app.use('/api/system', insertRouter)
  app.use('/api/product', productRouter)
  app.use('/api/categories', categoriesRouter)
  app.use('/api/reviews', reviewsRouter)
  app.use('/api/app', appRouter)

  return app.use('/', (req, res) => {
    res.send('Server on...')
  })
}

export default initRoutes
