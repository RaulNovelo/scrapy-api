# Node.js Scrapyd API

A Node.js wrapper for working with the Scrapyd API

## Install

    $ npm i @rnovec/scrapyd-api

## Usage

```js
const ScrapydAPI = require('@rnovec/scrapyd-api')
const scrapyd = new ScrapydAPI()

scrapyd.schedule('default', 'test-spider').then(
  jobid => {
    console.log(jobid)
  },
  err => {
    console.log(err)
  }
)
```

## API

### scrapyd.schedule

Schedule a Scrapy spider
