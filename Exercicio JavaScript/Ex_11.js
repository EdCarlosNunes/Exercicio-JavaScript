/*
Faça um programa que leia uma largura e a altura
de uma parede em metros, calcule a sua area e a 
quantidade de tinta necessaria para pintar-la
sabendo que uma lata de tinta pinta 2m²
*/

let largura = Number(prompt("Digite a largura da parede em metros:"))
let altura = Number(prompt("Digite a altura da parede em metros:"))

let area = largura * altura
let tinta = area / 2

console.log("Sua parte tem "+largura+"x"+altura+" e ele tem "+area+"m²\n"+"Vai precisar de "+tinta+"L de tinta.")