'use-strict'
const urljoin = require('url-join')
const deepcopy = require('deepcopy')
const constants = require('./constants')
const client = require('./client')

/**
 * Provides a thin Node.js wrapper around the Scrapyd API. The public methods
 * come in two types: first class, those that wrap a Scrapyd API endpoint
 * directly; and derived, those that use a one or more Scrapyd API endpoint(s)
 * to provide functionality that is unique to this wrapper.
 */
class ScrapyAPI {
  constructor (target = 'http://localhost:6800', ...options) {
    this.endpoints = deepcopy(constants.DEFAULT_ENDPOINTS)
    this.target = target
  }

  formatURL (endpoint) {
    var path
    try {
      path = this.endpoints[endpoint]
    } catch (error) {
      if (error) throw new Error(`Unknown endpoint ${endpoint}`)
    }
    return urljoin(this.target, path)
  }

  /**
   * Schedules a spider from a specific project to run. First class, maps
   * to Scrapyd's scheduling endpoint.
   * @param {String} project
   * @param {String} spider
   * @param  {...any} data
   */
  schedule (project, spider, ...data) {
    const url = this.formatURL(constants.SCHEDULE_ENDPOINT)
    const formData = {
      project,
      spider,
      ...data
    }
    return client.post(url, formData)
  }
}

module.exports = ScrapyAPI
