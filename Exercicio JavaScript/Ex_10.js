/*
vamos calcular quanto em reais o usuário pode comprar em dólar. E vamos pedir tanto o valor em reais que o usuário quer comprar em dólar quanto o valor da cotação do dia
*/

let real = Number(prompt("Digite quanto tem na carteira: "))
let dolar = Number(prompt("Digite o valor do dolar hoje: "))

let calculo = real * dolar

console.log(`Você com R$${real} pode comprar US$${calculo}`)