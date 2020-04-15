const request = require('request')
const { ScrapydResponseError } = require('./exceptions')

module.exports = {
  post: (url, formData) => {
    const options = {
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      formData
    }
    return new Promise((resolve, reject) => {
      request(options, (error, response) => {
        if (error) throw new ScrapydResponseError(error)
        const json = JSON.parse(response.body)
        if (json['status'] === 'error') {
          reject(json['message'])
        }
        resolve(json['jobid'])
      })
    })
  }
}
