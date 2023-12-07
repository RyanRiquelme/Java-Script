const spotify = [
    {
        nome: "Envolver",
        artista: "Anitta",
        álbum: "Versions of Me",
        streams: 1234567,
    },
    {
        nome: "Esquece o Mundo",
        artista: "Marília Mendonça",
        álbum: "As Patroas 35%",
        streams: 987654,
    },
    {
        nome: "Malvadão 3.0",
        artista: "Xamã",
        álbum: "O Iluminado",
        streams: 765432,
    },
    {
        nome: "Só Não Deixa Eu Chorar",
        artista: "Murilo Huff",
        álbum: "Para Ouvir Chorando",
        streams: 543210,
    },
    {
        nome: "Atrasadinha",
        artista: "Pedro Sampaio e Anitta",
        álbum: "País do Funk 2",
        streams: 321098,
    },
    {
        nome: "Fugidinha",
        artista: "Pedro Sampaio e Luísa Sonza",
        álbum: "País do Funk 2",
        streams: 109876,
    },
    {
        nome: "Vai Malandra",
        artista: "Anitta",
        álbum: "Kisses",
        streams: 98765,
    },
    {
        nome: "Ensaboa",
        artista: "Ludmilla",
        álbum: "Hello Mundo",
        streams: 87654,
    },
    {
        nome: "Vai Passar Mal",
        artista: "Ludmilla",
        álbum: "Hello Mundo",
        streams: 76543,
    },
    {
        nome: "Coração Cachorro",
        artista: "Ludmilla",
        álbum: "Hello Mundo",
        streams: 54.321,
    },
];

// SEMANA FINAL PARA CONCLUIR

// 1. TIPOS DE DADOS
// 2. ESTRUTURAS DE CONDIÇÃO
// 3. ESTRUTURAS DE REPETIÇÃO

// 1 - Atividade
// Deve ser retornado de todos os itens um modelo a seguir:
//Ludmilla, musica: Coração Cachorro com : 54.321

for (const iterator of spotify) {
    console.log(`${iterator.artista}, musica: ${iterator.nome} com: ${iterator.streams}`)
}

// 2. Vai exibir as musicas por Notas
// Se streams > 50k -> deve retornar "nota 6"
// Se strems > 200k -> deve retornar "nota 7"
// Se streams > 400k -> deve retornar "nota 8"
// Se streams > 600k -> deve retornar "nota 9"
// Se streams > 800k -> deve retornar "nota 10

for (const iterator of spotify) {
    if (iterator.streams > 50000 && iterator.streams < 200000 ) {
        console.log(`${iterator.nome} nota: 6`)        
    } else if (iterator.streams > 200000 && iterator.streams < 400000) {
        console.log(`${iterator.nome} nota: 7`)
    } else if (iterator.streams > 400000 && iterator.streams < 600000) {
        console.log(`${iterator.nome} nota: 8`)
    } else if (iterator.streams > 600000 && iterator.streams < 800000) {
        console.log(`${iterator.nome} nota: 9`)
    } else if (iterator.streams > 800000) {
        console.log(`${iterator.nome} nota: 10`)
    }
}

