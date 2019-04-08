const Axios = require('axios')
const url = 'https://www.boletobancario.com/boletofacil/integration/api/v1/'
const sandBoxUrl = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/'
const action = require('./methods')

class BoletoFacil {
  constructor(token, sandBox = true) {
    const axiosInstance = Axios.create({
      baseURL: sandBox ? sandBoxUrl : url,
      headers: {
        'token': token
      }
    })
    this.token = token
    this.instance = axiosInstance
    this.consultar = action.consultarBoleto
    this.emitir = action.emitirBoleto
  }

  async get(endPoint) {
    try {
      const response = await this.instance.get(endPoint)
      return {
        status: response.status,
        data: response.data
      }
    } catch (error) {
      throw error
    }
  }

  async post(endPoint, data) {
    try {
      const response = await this.instance.request({
        method: 'POST',
        url: endPoint,
        params: data
      })
      return {
        status: response.status,
        data: response.data
      }
    } catch (error) {
      throw error
    }
  }
}

module.exports = BoletoFacil
