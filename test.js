const Boleto = require('./index')
const boleto = new Boleto('TOKEN',true)
require('dotenv').config()
const env = process.env

const testePayload = {
    token: process.env.BOLETO_TOKEN,
    description: "Boleto",
    amount: "10.00",
    payerName: "Sacado Teste",
    payerCpfCnpj: "69658465000130",
}

boleto.emitir(testePayload).then(resp=>console.log(JSON.stringify(resp))).catch(error=>console.log(error && error.response.data))