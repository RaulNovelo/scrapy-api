const ScrapyAPI = require('./scrapy_api/index')
const scrapyapi = new ScrapyAPI()

scrapyapi.schedule('default', 'sii-login').then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
