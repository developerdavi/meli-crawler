const mercadoLibre = require('mercadolibre')

// const { MELI_ID, MELI_SECRET, MELI_TOKEN }

export default function Products(request, response) {
  const { query } = request

  // CACHING
  response.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')

  // const meli = new mercadoLibre.Meli(MELI_ID, MELI_SECRET)

  // meli.get('/')

  // SEND PRODUCTS RESPONSE
  response.json(query)
}