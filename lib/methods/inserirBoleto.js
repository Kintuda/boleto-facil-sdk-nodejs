const qs = require('querystring')

module.exports = function emitir(payload){
  // const data = qs.stringify(payload)
  return this.post('issue-charge', payload)
}
