const mercadoLibre = require('mercadolibre')

const { MELI_APP, MELI_SECRET } = process.env

export default function Seller(request, response) {
  const { id } = request.query

  // CACHING
  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  
  const meli = new mercadoLibre.Meli(MELI_APP, MELI_SECRET)

  meli.get(`/users/${id}`, null, (err, res) => {

    response.json(res)
  })

}