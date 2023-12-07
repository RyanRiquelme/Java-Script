const livros = [
    {
        nome: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        nota_imdb: 8.8,
        personagens: [
            "Frodo Bolseiro",
            "Gandalf",
            "Aragorn",
            "Legolas",
            "Gollum"
        ]
    },
    {
        nome: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        nota_imdb: 7.6,
        personagens: [
            "Harry Potter",
            "Hermione Granger",
            "Ron Weasley",
            "Alvo Dumbledore"
        ]
    },
    {
        nome: "O Poderoso Chefão",
        autor: "Mario Puzo",
        nota_imdb: 9.2,
        personagens: [
            "Vito Corleone",
            "Michael Corleone",
            "Sonny Corleone",
            "Tom Hagen"
        ]
    },
    {
        nome: "O Código Da Vinci",
        autor: "Dan Brown",
        nota_imdb: 6.6,
        personagens: [
            "Robert Langdon",
            "Sophie Neveu",
            "Silas",
            "Jacques Saunière"
        ]
    },
    {
        nome: "A Saga Crepúsculo: Crepúsculo",
        autor: "Stephenie Meyer",
        nota_imdb: 5.2,
        personagens: [
            "Edward Cullen",
            "Bella Swan",
            "Jacob Black",
            "Alice Cullen"
        ]
    }
];
// Codigo  que exibe todos os nomes de cada livro
for (const livro of livros) {
    console.log(livro.nome)
}

// Exercicio, maior que 8

for (const livro of livros) {
    if (livro.nota_imdb >= 8) {

    }
}

// menor que 6
for (const livro of livros) {
    if (livro.nota_imdb <= 6) {

    }
}

// Junto o for que tenha nota maior que >8 e o menor que 6. Em apenas 1 só.

for (const livro of livros) {
    if (livro.nota_imdb >= 8) {
        console.log(`Livros com a nota maior que 8: ${livro.nome}`)
    }
    if (livro.nota_imdb <= 6) {
        console.log(`Livros com a nota menor que 6: ${livro.nome}`)
    }
}