import { DATA } from "./data.js";

// Função utilitária para criar opções de um select
function createOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

// Função principal que resgata as pizzas
function resgataPizzas() {
    // Função interna para criar elementos e manipular eventos relacionados a pizzas
    function createPizzaElement(pizza) {
        const divPizzas = document.getElementById('pizzas');

        // Cria um título h2 com o sabor da pizza
        const h2Sabor = document.createElement('h2');
        h2Sabor.textContent = pizza.sabor;
        divPizzas.appendChild(h2Sabor);

        // Cria uma imagem da pizza
        const img = document.createElement('img');
        img.src = pizza.image;
        img.className = 'pizzas-imagens';
        divPizzas.appendChild(img);

        // Cria um select para escolher o tamanho da pizza
        const selectElement = document.createElement('select');
        selectElement.name = 'tamanho';

        // Adiciona opções ao select usando for e índices correspondentes
        for (let i = 0; i < pizza.venda.tamanho.length; i++) {
            const tamanho = pizza.venda.tamanho[i];
            const preco = pizza.venda.preco[i];

            const optionElement = createOption(tamanho, tamanho);
            selectElement.appendChild(optionElement);
        }

        // Adiciona um evento para atualizar o preço ao selecionar um tamanho
        selectElement.addEventListener('change', function () {
            const selectedPrice = pizza.venda.preco[this.selectedIndex];
            updatePrice(selectedPrice);
        });

        divPizzas.appendChild(selectElement);

        // Adiciona um parágrafo para exibir o preço
        const priceParagraph = document.createElement('p');
        divPizzas.appendChild(priceParagraph);

        // Função interna para atualizar o parágrafo com o preço selecionado
        function updatePrice(price) {
            priceParagraph.textContent = `Preço: ${price}`;
        }
    }

    // Itera sobre as pizzas e chama a função createPizzaElement para cada uma
    DATA.pizzas.forEach(pizza => {
        createPizzaElement(pizza);
    });
}

// Chama a função principal
resgataPizzas();
