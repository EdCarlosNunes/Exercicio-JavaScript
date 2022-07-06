/*
crie um codigo que faz uma lista 
sorteada com nome
*/

let pessoa1 = String(prompt("Digite o primeiro nome: "))
let pessoa2 = String(prompt("Digite o segundo nome: "))
let pessoa3 = String(prompt("Digite o terceiro nome: "))
let pessoa4 = String(prompt("Digite o quarto nome: "))

let nomes = [pessoa1, pessoa2, pessoa3, pessoa4]

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

embaralha(nomes);
console.log("A ordem sera "+nomes);
