const {dados} = require('./Mercado')
for (const computador of dados.results) {
    if (computador.price >= 1500) {
        console.log(`${computador.title}: ${computador.price} R$`)
    }
}