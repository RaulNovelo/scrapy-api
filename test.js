const ScrapydAPI = require('./scrapy_api')
const scrapyd = new ScrapydAPI()

scrapyd.schedule('default', 'test-spider').then(
  jobid => {
    console.log(jobid)
  },
  err => {
    console.log(err)
  }
)
