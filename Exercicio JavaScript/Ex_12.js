/*
Crie um programa que peça o valor do produto
e de 5% de desconto
*/

let produto = Number(prompt("Digite o valor do produrto: "))

let desconto = (5/100) * produto
let newProduto = produto - desconto

console.log("Voce ganho 5% de desconto no valor de R$"+produto+", desconto de R$"+desconto+" Passa a ser R$"+newProduto)