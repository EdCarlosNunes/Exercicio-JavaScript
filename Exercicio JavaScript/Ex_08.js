/*
Ecrever um programa que leia um valor em metros e
o exiba convertido em centimetro e milimetro
*/

let valorMetro = Number(prompt("Digite um valor em Metros: "))

let centimetro = valorMetro * 100
let milimetro = valorMetro * 1000

console.log("O valor "+valorMetro+" Metro em Centimetro é "+centimetro+"cm")
console.log("O valor "+valorMetro+" Metro em Milimetro é "+milimetro+"mm")