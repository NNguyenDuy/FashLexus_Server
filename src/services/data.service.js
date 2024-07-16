import db from '../models'
import hoodies from '../../data/hoodies.json'
import jeans from '../../data/jeans.json'
import shirts from '../../data/shirts.json'
import shorts from '../../data/shorts.json'
import suits from '../../data/suits.json'
import tshirts from '../../data/tshirts.json'
import { formatPath, getPrice } from '../ultis/common'
import { register } from './auth.service'

const data = [
  {
    link: hoodies,
  },
  {
    link: jeans,
  },
  {
    link: shirts,
  },
  {
    link: shorts,
  },
  {
    link: suits,
  },
  {
    link: tshirts,
  },
]

export const insertData = () =>
  new Promise(async (resolve, reject) => {
    try {
      await register({
        Fullname: 'nguyenduy',
        Gmail: 'nguyenduy@gmail.com',
        Password: '12345678',
      })
      
      await Promise.all(
        data.map(async (index) => {
          const category = await db.Category.create({
            Name: index.link.category.name,
            Category_path: formatPath(index.link.category.path),
            Status: 1,
          })

          await Promise.all(
            index.link.products.map(async (item) => {
              const images = JSON.stringify(item.images)
              const details = JSON.stringify(item.description.details)
              const size = JSON.stringify(item.description.size)
              const color = JSON.stringify(item.description.color)
              const product = await db.Product.create({
                Category_id: category.id,
                Name: item.name,
                Description: details,
                Sizes: size,
                Colors: color,
                Price: getPrice(item.price),
                Images: images,
                Discount: getPrice(item.oldPrice),
                Quantity: 10,
                Sold: 12,
                Status: 1,
              })

              await Promise.all(
                item.comments.map(async (comment) => {
                  await db.Review.create({
                    Product_id: product.id,
                    User_id: 1,
                    Rating: comment.starRating,
                    Title: comment.title || 'No title',
                    Content: comment.content,
                    createdAt: Date.now('YYYY:MM:DD'),
                  })
                })
              )
            })
          )
        })
      )
      resolve()
    } catch (error) {
      reject(error)
    }
  })
