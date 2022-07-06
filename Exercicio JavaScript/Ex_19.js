/*
escreva um codigo que pegue 4 nomes
e sorteie uma pessoa
*/

let pessoa1 = String(prompt("Digite o primeiro nome: "))
let pessoa2 = String(prompt("Digite o segundo nome: "))
let pessoa3 = String(prompt("Digite o terceiro nome: "))
let pessoa4 = String(prompt("Digite o quarto nome: "))

let lista = [pessoa1, pessoa2, pessoa3, pessoa4]

let sorteio = lista[Math.floor(Math.random() * lista.length)]

console.log("A pessoa sorteada: "+sorteio)