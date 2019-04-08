module.exports = function emitir(payload) {
  return this.post('issue-charge', payload)
}
