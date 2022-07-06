/*
Crie um programa que leia um numero quebrado
exemplo 5.6523 e retorne sua porção inteira
exemplo 5
*/

let numero = Number(prompt("Digite um numero quebrado:"))

let inteiro = Math.floor(numero)

console.log("Voce digitou "+numero+" sua porção inteira é "+inteiro)