const mercadoLibre = require('mercadolibre')

const { MELI_APP, MELI_SECRET } = process.env

export default async function Products(request, response) {
  const { body } = request

  // CACHING
  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

  try {
    const meli = new mercadoLibre.Meli(MELI_APP, MELI_SECRET)
  
    meli.get(`/sites/MLB/search?q=${body.search}`, null, (err, res) => {
      
      response.status(200)

      // SEND PRODUCTS RESPONSE
      response.json(res.results)
    })

  } catch (error) {

    response.status(500)
    response.json(error)
  }


}