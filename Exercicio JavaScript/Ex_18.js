/*
Faça um programa que leia um angulo
e mostre na tela o valor do seno, cosseno 
e tangente desse angulo
*/

let angulo = Number(prompt("Digite o angulo que deseja: "))

let radius = angulo * (Math.PI / 180)
let sin = Math.sin(radius).toFixed(2)
let co = Math.cos(radius).toFixed(2)
let tan = Math.tan(radius).toFixed(2)

console.log("O ângulo de "+angulo+" tem o SENO de "+sin)
console.log("O ângulo de "+angulo+" tem o COSSENO de "+co)
console.log("O ângulo de "+angulo+" tem o TANGENTE de "+tan)
