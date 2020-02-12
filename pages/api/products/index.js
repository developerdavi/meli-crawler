const mercadoLibre = require('mercadolibre')
const axios = require('axios')

const { MELI_APP, MELI_SECRET } = process.env

const SELF = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://meli-crawler.devdavi.com.br'

export default async function Products(request, response) {
  const { body } = request

  const limit = body.limit || 20

  // CACHING
  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

  try {
    const meli = new mercadoLibre.Meli(MELI_APP, MELI_SECRET)
  
    return meli.get(`/sites/MLB/search?q=${body.search}`, null, async (err, res) => {

      if (err)
        throw Error(err)

      const raw_products = res.results
      const products = []

      for (let i = 0; i < raw_products.length; i++) {

        if (i == limit) break

        try {
          const raw_product = raw_products[i]
          const seller_id = raw_product.seller.id
          const seller = await axios.get(`${SELF}/api/sellers/${seller_id}`)
          const seller_name = seller.data ? seller.data.nickname : null
          
          const product = {
            name: raw_product.title,
            link: raw_product.permalink,
            price: raw_product.price,
            store: seller_name,
            state: raw_product.address.state_name
          }

          products.push(product)
        } catch (error) {
          response.status(500)
          response.json({ error })
        }
      }
      
      response.status(200)

      // SEND PRODUCTS RESPONSE
      response.json(products)
    })

  } catch (error) {

    response.status(500)
    return response.json(error)
  }
}