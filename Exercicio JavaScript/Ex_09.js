/*
peça ao usuario o numero que quer ver a tabuiada e até
qual numero ele quer ver a tabuada.
*/

let numero = Number(prompt("Digite um numero: "))
let maximo = Number(prompt("Digite o valor que quer que a tabuada vai, exemplo até 10 ou 30."))

for(let i = 1; i <= maximo; i++){
    let conta = numero * i
    console.log(`${numero} x ${i} = ${conta}`)
}