const { assert, expect } = require('chai')
const ScrapydAPI = require('../src')
const scrapyd = new ScrapydAPI()

describe('Tests for Scrapyd', () => {
  it('Test Sii Spider', async () => {
    const jobid = await scrapyd.schedule('default', 'example', {
      rut: '',
      clave: '',
      webhook: 'http://localhost:3000/cliente'
    })
    expect(jobid).to.be.an('string')
  })
})
