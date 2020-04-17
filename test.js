const ScrapyAPI = require('./scrapy_api/index')
const scrapyapi = new ScrapyAPI()

scrapyapi.schedule('default', 'test-spider').then(
  jobid => {
    console.log(jobid)
  },
  err => {
    console.log(err)
  }
)
