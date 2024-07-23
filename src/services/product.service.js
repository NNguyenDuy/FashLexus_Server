import db from '../models'
import { redisClient } from '../config/redis'

const CACHE_TTL = 3600

export const getProductsFeatured = async () => {
  const CACHE_KEY = 'featured_products'
  try {
    if (redisClient.isReady) {
      const cachedProducts = await redisClient.get(CACHE_KEY)
      if (cachedProducts) {
        try {
          const parsedProducts = JSON.parse(cachedProducts)
          return {
            error: 0,
            message: 'Get products from cache success',
            products: parsedProducts,
          }
        } catch (parseError) {
          console.error('Error parsing cached products:', parseError)
        }
      }
    }

    const products = await db.sequelize.query('CALL GetTopProducts()', {
      type: db.sequelize.QueryTypes.RAW,
    })

    if (redisClient.isReady) {
      await redisClient.setEx(CACHE_KEY, CACHE_TTL, JSON.stringify(products))
    }

    return {
      error: 0,
      message: 'Get products success',
      products,
    }
  } catch (error) {
    return {
      error: -1,
      message: 'Failed to get products',
      details: error.message,
    }
  }
}

export const getProductsNewArrival = async () => {
  const CACHE_KEY = 'new_arrival_products'
  try {
    if (redisClient.isReady) {
      const cachedProducts = await redisClient.get(CACHE_KEY)
      if (cachedProducts) {
        try {
          const parsedProducts = JSON.parse(cachedProducts)
          return {
            error: 0,
            message: 'Get products from cache success',
            products: parsedProducts,
          }
        } catch (parseError) {
          console.error('Error parsing cached products:', parseError)
        }
      }
    }

    const products = await db.Product.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
    })

    if (redisClient.isReady) {
      await redisClient.setEx(CACHE_KEY, CACHE_TTL, JSON.stringify(products))
    }

    return {
      error: 0,
      message: 'Get products success',
      products,
    }
  } catch (error) {
    return {
      error: -1,
      message: 'Failed to get products',
      details: error.message,
    }
  }
}

export const getProductsTrending = async () => {
  const CACHE_KEY = 'trending_products'
  try {
    if (redisClient.isReady) {
      const cachedProducts = await redisClient.get(CACHE_KEY)
      if (cachedProducts) {
        try {
          const parsedProducts = JSON.parse(cachedProducts)
          return {
            error: 0,
            message: 'Get products from cache success',
            products: parsedProducts,
          }
        } catch (parseError) {
          console.error('Error parsing cached products:', parseError)
        }
      }
    }

    const products = await db.sequelize.query('CALL GetTrendingProducts()', {
      type: db.sequelize.QueryTypes.RAW,
    })

    if (redisClient.isReady) {
      await redisClient.setEx(CACHE_KEY, CACHE_TTL, JSON.stringify(products))
    }

    return {
      error: 0,
      message: 'Get products success',
      products,
    }
  } catch (error) {
    return {
      error: -1,
      message: 'Failed to get products',
      details: error.message,
    }
  }
}

export const getProduct = async (id) => {
  try {
    const product = await db.Product.findOne({ where: { id } })
    return {
      error: 0,
      message: 'Get product success',
      product,
    }
  } catch (error) {
    return {
      error: -1,
      message: 'Failed to get product',
      details: error.message,
    }
  }
}

export const getProductsCategory = async ({
  category,
  searchName,
  minPrice,
  maxPrice,
  offset,
  pageSize,
}) => {
  try {
    const queryParams = []
    let query = `
        SELECT p.*, c.Category_path FROM Products p
        JOIN Categories c ON c.id = p.Category_id
        WHERE c.Category_path = ?`
    queryParams.push(category)

    if (searchName) {
      query += ` AND p.Name LIKE ?`
      queryParams.push(`%${searchName}%`)
    }

    if (minPrice && maxPrice) {
      query += ` AND p.Price BETWEEN ? AND ?`
      queryParams.push(minPrice, maxPrice)
    }

    query += ` LIMIT ?, ?`
    queryParams.push(parseInt(offset), parseInt(pageSize))

    const [products] = await db.sequelize.query(query, {
      replacements: queryParams,
      type: db.sequelize.QueryTypes.RAW,
    })

    return {
      error: 0,
      message: 'Get products category success',
      products,
    }
  } catch (error) {
    return {
      error: -1,
      message: 'Failed to get products category',
      details: error.message,
    }
  }
}

export const getTotalProductsCategory = async ({
  category,
  searchName,
  minPrice,
  maxPrice,
}) => {
  try {
    const queryParams = []
    let query = `
        SELECT COUNT(*) AS total FROM Products p
        JOIN Categories c ON c.id = p.Category_id
        WHERE c.Category_path = ?`
    queryParams.push(category)

    if (searchName) {
      query += ` AND p.Name LIKE ?`
      queryParams.push(`%${searchName}%`)
    }

    if (minPrice && maxPrice) {
      query += ` AND p.Price BETWEEN ? AND ?`
      queryParams.push(minPrice, maxPrice)
    }

    const [result] = await db.sequelize.query(query, {
      replacements: queryParams,
      type: db.sequelize.QueryTypes.SELECT,
    })

    return {
      error: 0,
      message: 'Get total products category success',
      total: result.total,
    }
  } catch (error) {
    return {
      error: -1,
      message: 'Failed to get total products category',
      details: error.message,
    }
  }
}
