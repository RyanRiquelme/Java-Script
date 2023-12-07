const pokemonData = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass/Poison",
        base_experience: 64,
        height: 0.7,
        weight: 6.9,
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass/Poison",
        base_experience: 142,
        height: 1.0,
        weight: 13.0,
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Grass/Poison",
        base_experience: 236,
        height: 2.0,
        weight: 100.0,
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fire",
        base_experience: 62,
        height: 0.6,
        weight: 8.5,
    },
    {
        id: 5,
        name: "Charmeleon",
        type: "Fire",
        base_experience: 142,
        height: 1.1,
        weight: 19.0,
    },
    {
        id: 6,
        name: "Charizard",
        type: "Fire/Flying",
        base_experience: 240,
        height: 1.7,
        weight: 90.5,
    },
    {
        id: 7,
        name: "Squirtle",
        type: "Water",
        base_experience: 63,
        height: 0.5,
        weight: 9.0,
    },
    {
        id: 8,
        name: "Wartortle",
        type: "Water",
        base_experience: 142,
        height: 1.0,
        weight: 22.5,
    },
    {
        id: 9,
        name: "Blastoise",
        type: "Water",
        base_experience: 239,
        height: 1.6,
        weight: 85.5,
    },
    {
        id: 10,
        name: "Caterpie",
        type: "Bug",
        base_experience: 39,
        height: 0.3,
        weight: 2.9,
    },
    {
        id: 11,
        name: "Metapod",
        type: "Bug",
        base_experience: 72,
        height: 0.7,
        weight: 9.9,
    },
    {
        id: 12,
        name: "Butterfree",
        type: "Bug/Flying",
        base_experience: 178,
        height: 1.1,
        weight: 32.0,
    },
    {
        id: 13,
        name: "Weedle",
        type: "Bug/Poison",
        base_experience: 39,
        height: 0.3,
        weight: 3.2,
    },
    {
        id: 14,
        name: "Kakuna",
        type: "Bug/Poison",
        base_experience: 72,
        height: 0.6,
        weight: 10.0,
    },
    {
        id: 15,
        name: "Beedrill",
        type: "Bug/Poison",
        base_experience: 178,
        height: 1.0,
        weight: 29.5,
    },
];

// FUNÇÃO QUE ENCONTRA O POKEMON
function encontraPoke(pokemon, pokemons) {
    for (const iterator of pokemons) {
        if (iterator.name === pokemon) {
            return iterator
        }
    }

    return 'Não existe este pokemon';
}

console.log(
    encontraPoke('Charizard', pokemonData)
)

function encontraPoke(id, pokemons) {
    for (const iterator of pokemons) {
        if (iterator.id === id) {
            return iterator
        }
    }

    return 'Não existe este id';
}

console.log(
    encontraPoke(10,pokemonData)
)

// EXERCICIO

function pokesFire(pokemons, fire) {
    let contador = 0;
    for (const iterator of pokemons) {
        if (iterator.type === fire) {
            contador += 1
        }
    }

    return contador
}

function retornaPokes(pokemons, fire) {
    let pokes = [];
    for (const iterator of pokemons) {
        if (iterator.type === fire) {
            pokes.push(iterator)
        }
    }

    return pokes
}

console.log(retornaPokes(pokemonData, 'Fire'))

// ENCONTRAR OS POKEMONS POR ALTURA

function alturapoke(pokemons, height){
    let pokes = []
    for (const iterator of pokemons) {
        if (iterator.height === height) {
            pokes.push
        }
    }
    return iterator       
}

console.log()

// ENCONTRA O POKEMON COM A MAIOR ALTURA:
function pokeHeigthMax(pokemons) {
    let height = 0;
    let pokemon = null;

    for (const iterator of pokemons) {
        if (iterator.height > height) {
            height = iterator.height;
            pokemon = iterator.name;
        }
    }

    return `${pokemon} e sua altura ${height}m`
}

console.log(pokeHeigthMax(pokemonData))

// ENCONTRA O POKEMON COM A MENOR ALTURA:

function pokeHeigthMin(pokemons) {
    let height = 999;
    let pokemon = null;

    for (const iterator of pokemons) {
        if (iterator.height < height) {
            height = iterator.height;
            pokemon = iterator.name;
        }
    }

    return `${pokemon} e sua altura ${height}m`
}

console.log(pokeHeigthMin(pokemonData))

// ENCONTRA O POKEMON POR BASE

function pokebase(pokemons, base_experience) {
    let pokes = [];
    for (const iterator of pokemons) {
        if (iterator.base_experience === base_experience) {
            pokes.push(iterator)
        }
    }
    
    return pokes        
}

console.log(pokebase(pokemonData, 63))