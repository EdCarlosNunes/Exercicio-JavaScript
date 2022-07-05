/*
ler uma palavra e que foi digitado e informe
se é um numero, se é uma string, se esta maiusculo 
e se esta minusculo
*/
let palavra = prompt("Digite algo: ")

let notNumber = isNaN(palavra)
let UpString = palavra.toUpperCase()
let LowerString = palavra.toLowerCase()



console.log("Não é numero: "+notNumber)
if(notNumber == toString(palavra)){
    console.log("Não é palavra: True")
}else{
    console.log("Não é palavra: False")
}

if(UpString == palavra ){
    console.log("É maiusculo: True")
}else{
    console.log("É maiusculo: False")
}

if(LowerString == palavra){
    console.log("É minuscula: True") 
}else{
    console.log("É minuscula: False") 
}
