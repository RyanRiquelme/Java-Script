const { naruto, pokemons } = require('./data')

// 1. Exiba todos os nomes dos filmes de naruto e pokemon

for (const iterator of naruto) {
    console.log(iterator.Title)
}

for (const iterator of pokemons) {
    console.log(iterator.Title)
}

// 2. Exiba apenas os filmes depois de 2000

for (const iterator of naruto) {
    if (iterator.Year > 2000) {
        console.log(iterator.Title)
    }
}

for (const iterator of pokemons) {
    if (iterator.Year > 2000) {
        console.log(iterator.Title)
    }
}