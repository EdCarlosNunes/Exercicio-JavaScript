/*
faça um programa que leia um numero e mostre o seu
su dobro, triplo e a raiz do numero
*/

let number = Number(prompt("Digite um numero: "))

let dobro = number * 2 
let triplo = number * 3
let raiz = Math.sqrt(number)

console.log("o dobro do numero "+number+
            "\ndobro do numero "+number+ " é "+dobro+
            "\nTriplo do numero "+number+ " é "+triplo+
            "\nRaiz do numero "+number+ " é "+raiz)