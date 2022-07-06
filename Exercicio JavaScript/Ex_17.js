/*
Faça um programa que leia o comprimento do cateto
oposto e do cateto adjacente de um triangulo
retangulo
calcule e mostre o comprimento da hipotenusa
*/

let co = Number(prompt("Coloque o valor do cateto oposto:"))
let adj = Number(prompt("Coloque o valor do cateto adjacente:"))

let hipotenusa = (co ** 2 + adj ** 2) ** (1/2)

console.log("Hipotenusa é igual a "+hipotenusa)