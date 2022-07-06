/*
Faça um programa que pegue o salario do
funcionario e de um aumento de 15% de 
aumento
*/

let salario = Number(prompt("Qual o valor do seu salario:"))

let aumento = (15/100) * salario
let newSalario = salario + aumento

console.log("Seu salario de R$"+salario+" teve um aumento de 15% R$"+aumento+"\nPassa a ser R$"+newSalario)