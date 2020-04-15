'use-strict'

/**
 * Custom Base Scrapyd Exception
 */
class ScrapydError extends Error {
  constructor (message = 'Scrapyd Error') {
    super(message)
    this.name = 'ScrapydError'
  }
}

/**
 * Custom Scrapyd Reponse Exception
 */
class ScrapydResponseError extends ScrapydError {
  constructor (message = 'Scrapyd Response Error') {
    super(message)
    this.name = 'ScrapydResponseError'
  }
}

module.exports = {
  ScrapydError,
  ScrapydResponseError
}
