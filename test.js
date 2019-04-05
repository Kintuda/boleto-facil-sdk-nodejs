const Boleto = require('./index')
const boleto = new Boleto('TOKEN',false)
// console.log(boleto);
const testePayload = {
    "token": "SEUTOKEN",
    "description": "Boleto",
    "amount": "10.00",
    "payerName": "Sacado Teste",
    "payerCpfCnpj": "69658465000130",
}

// boleto.consultar().then((res=>{
//     console.log(res);
// }))

boleto.emitir(testePayload).then(resp=>console.log(resp)).catch(error=>console.log(error))