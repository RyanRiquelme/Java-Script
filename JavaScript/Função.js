// Operações Básicas
// + soma
// - subtração
// * multiplicação
// / divisão

// Aula de Função!
function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
};

function diminuiDoisNumeros(numero1, numero2) {
    return numero1 - numero2
};

function areaQuadrado(base, altura) {
    const resultado = base * altura;
    return `A área do quadrado é: ${resultado}`
}

console.log(somaDoisNumeros(5, 10));
console.log(diminuiDoisNumeros(5, 3));
console.log(areaQuadrado(20, 2))

function par(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par`
    } else {
        return `é impar`
    }
}

console.log(par(4))