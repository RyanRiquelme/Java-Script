const listaDeLivros = [
    { id: 1, livro: 'Senhor dos Anéis', paginas: 1000, favorito: true },
    { id: 2, livro: 'Harry Potter', paginas: 800, favorito: false },
    { id: 3, livro: 'Grand Father', paginas: 600, favorito: true },
    { id: 4, livro: 'Guerra e Paz', paginas: 400, favorito: false },
    { id: 5, livro: 'Cem anos de solidão', paginas: 300, favorito: true },
    { id: 6, livro: 'O tempo e o vento', paginas: 200, favorito: false },
    { id: 7, livro: 'A hora da estrela ', paginas: 150, favorito: false },
    { id: 8, livro: 'Menino Maluquinho', paginas: 120, favorito: false },
  ];

listaDeLivros.push({ id: 9, livro: 'Thor o Deus do trovão', paginas: 136, favorito: true })
listaDeLivros.push({ id: 10, livro: 'Thor o Deus do trovão', paginas: 136, favorito: true })

console.log(listaDeLivros)

// SOMAR

let soma = 0

for (let index = 0; index < listaDeLivros.length; index++) {
    const element = listaDeLivros[index].paginas;
    soma += element
}

console.log(soma)

// MEDIA

const media = soma / listaDeLivros.length

console.log('Valor da soma das paginas:', soma)
console.log('Media de paginas:', media)

// Livro

for (let index = 0; index < listaDeLivros.length; index++) {
    const element = listaDeLivros[index];

    console.log(element.id, element.livro )    
}