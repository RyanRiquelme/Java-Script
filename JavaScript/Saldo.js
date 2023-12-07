const entrada = [10324324, 502343242, 30234234, 102342342, 5.5, 1000];
const saida = [2, 60, 900];
let saldo = 0;

let resultado_entrada = 0;
let resultado_saida = 0;

for (const valor of entrada) {
    resultado_entrada += valor;
}

for (const valor of saida) {
    resultado_saida += valor;
} 

saldo = resultado_entrada - resultado_saida;

console.log("O saldo do Ryan:", saldo);