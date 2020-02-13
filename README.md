# Meli Crawler - Get products from MercadoLibre :brazil:

### :rocket: Technologies

- NodeJS
- NextJS
- MercadoLibre SDK
- [ZEIT Now](https://zeit.co)

### :book: Docs

Get Insomnia workspace [here](https://raw.githubusercontent.com/developerdavi/meli-crawler/master/docs/Insomnia_2020-02-12.json), import it and start using right now :octocat:

### :eyes: Example:

#### Request

BASE URL: `https://meli-crawler.devdavi.com.br`

POST `/api/products` 
```json
{
  "search": "Notebook",
  "limit": 10
}
```

*Ps.: Fetching products data from the same route using GET method returns cached results from crawler with improved perfomance (from 1s to 40ms).*
**Sellers' data is always cached to improve reusable and *almost immutable* data usage.**

#### Response

```json
[
  {
    "name": "Notebook Dell Inspiron 3583-u05p Pentium 4gb 500gb 15.6 Linux",
    "link": "https://produto.mercadolivre.com.br/MLB-1291517506-notebook-dell-inspiron-3583-u05p-pentium-4gb-500gb-156-linux-_JM",
    "price": 1719,
    "store": "DELLCOMPUTADORES",
    "state": "São Paulo"
  },
]
```
### :question: How it works?

The app uses NextJS to do server-side rendering and ZEIT Now to cache results to improve searches performance and save a lot of time.

NextJS has routes API that allows us doing things like we do using ExpressJS, for example. Inside `/pages` we have our routes and their respective handlers. 

We have to export there a React component or a custom response to clients. As we are creating an crawler, we just need to return json data, using `response.json(data)`, just like we do using the ExpressJS API. So, the learning curve is as minimum as possible.

### :v: Contribution

Please, if you want to contribute:
- Leave a star :star:
- Do a fork
- Create a `my-feature` branch
- Create a pull request
- Smile :smile: 
