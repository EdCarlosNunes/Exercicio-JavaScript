/*
Escreva um codigo que pergunte a quantidade
de Km percorrido por um carro e quantos dias
a pessoa fico com o carro alugado
sabendo que cada dia o aluguel é R$60
e por Km é R$0,15
*/

let diaria = Number(prompt("Quantos dias alugados?"))
let kmUsado = Number(prompt("Quantos Km rodados?"))

let valorDiaria = diaria * 60
let valorKm = kmUsado * 0.15

console.log("Valor a pagar é de R$"+(valorDiaria + valorKm))