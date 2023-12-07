// Exercísio 1

let num1 = 550
let num2 = 500

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// Exercísio 2

num1 = 550
num2 = 500

if (num1 > num2) {
    console.log(num1, 'é maior que', num2)
} else {
    console.log(num2, 'é menor que', num1)
}

// Exercísio 3

let n1 = 6;
let n2 = 4;
let n3 = 2;

if (n1 > n2 && n1 > n3) {
    console.log(n1, 'é maior');
} else if (n2 > n1 && n2 > n3) {
    console.log(n2, 'é maior');
} else {
    console.log(n3, 'é maior');
}

// Exercísio 4

let anguloA = 90
let anguloB = 35
let anguloC = 45

if (anguloA + anguloB + anguloC === 180) {
    console.log('Valido')
} else if (anguloA < 0  || anguloB  < 0 || anguloC  < 0) {
    console.log('Invalido')
} else {
    console.log('Não é um triangulo')
}

// Exercicios:
// considere esse array para realizar os proximos exercícios
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 25];

// 5. Percorra o array imprimindo todos os valores continos nele com a função console.log()
for (const number of numbers) {
    console.log(number)
}

// 6. Some todos os valores contidos no array e imprima o resultado.
let resultado = 0
for (const number of numbers) {
    resultado += number;
}
console.log("A soma de todos os valores é: "+ resultado);

// 7. Calcule e imprima a média aritmetica dos valores contidos no array.
const media = resultado /numbers.length;
console.log("A média aritmética dos valores é: " + media);

// 8. percorra os produtos, e some todos os valores de 'preco'. Exiba o resultado dessa soma.

const produtos = [
    { nome: "Arroz", preco: 20 },
    { nome: "Feijão", preco: 15 },
    { nome: "Macarrão", preco: 10 },
    { nome: "Carne", preco: 50 },
    { nome: "Frutas", preco: 30 },
    { nome: "Verduras", preco: 20 },
]

let soma2 = 0
for (const produto of produtos) {
    soma2 += produto.preco
}

console.log('A soma dos preços é: ' + soma2)

const media2 = soma2 / 6
console.log('A media dos preços é: ' + media )
