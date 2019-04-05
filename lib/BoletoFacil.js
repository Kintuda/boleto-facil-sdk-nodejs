const Axios = require('axios')
const url = 'https://www.boletobancario.com/boletofacil/integration/api/v1/'
const sandBoxUrl = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/'
const action = require('./methods')
console.log(action);

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
      let response = await this.instance.get(endPoint)
      return response.data
    } catch (error) {
      console.log(error);
      return error.response && error.response.data
    }
  }

  async post(endPoint, data) {
    try {
      console.log(data);
      let response = await this.instance.request({
        method: 'POST',
        url: endPoint,
        params: data
      })
      return response.data
    } catch (error) {
      return error.response && error.response.data
    }
  }
}

module.exports = BoletoFacil
