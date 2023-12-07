import { DATA } from "./data.js";

// Função utilitária para criar opções de um select
function createOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

// Função principal que resgata pizzas, lanches e bebidas
function resgataPizzasLanchesBebidas() {
    // Função interna para criar elementos e manipular eventos relacionados a pizzas, lanches e bebidas
    function createFoodElement(foodItem, containerId) {
        const divContainer = document.getElementById(containerId);

        // Cria um título h2 com o nome/sabor do item
        const h2Nome = document.createElement('h2');
        h2Nome.textContent = foodItem.sabor || foodItem.nome;
        divContainer.appendChild(h2Nome);

        // Cria uma imagem do item (considerando que todos os itens têm uma imagem)
        const img = document.createElement('img');
        img.src = foodItem.image || 'https://sgnh.com.br/wp-content/uploads/2021/07/pizza_frango.png';
        img.className = 'pizzas-imagens';
        divContainer.appendChild(img);

        // Se for uma pizza, lanche ou bebida, adiciona um select para escolher o tamanho do item
        if (foodItem.venda) {
            const selectElement = document.createElement('select');
            selectElement.name = 'tamanho';

            // Adiciona opções ao select usando for e índices correspondentes
            for (let i = 0; i < foodItem.venda.tamanho.length; i++) {
                const tamanho = foodItem.venda.tamanho[i];
                const preco = foodItem.venda.preco[i];

                const optionElement = createOption(tamanho, tamanho);
                selectElement.appendChild(optionElement);
            }

            // Adiciona um evento para atualizar o preço ao selecionar um tamanho
            selectElement.addEventListener('change', function () {
                const selectedPrice = foodItem.venda.preco[this.selectedIndex];
                updatePrice(selectedPrice);
            });

            divContainer.appendChild(selectElement);
        }

        // Adiciona um parágrafo para exibir o preço
        const priceParagraph = document.createElement('p');
        divContainer.appendChild(priceParagraph);

        // Função interna para atualizar o parágrafo com o preço selecionado
        function updatePrice(price) {
            priceParagraph.textContent = `Preço: ${price}`;
        }
    }

    // Itera sobre as pizzas e chama a função createFoodElement para cada uma
    DATA.pizzas.forEach(pizza => {
        createFoodElement(pizza, 'pizzas');
    });

    // Itera sobre os lanches e chama a função createFoodElement para cada um
    DATA.lanches.forEach(lanche => {
        createFoodElement(lanche, 'lanches');
    });

    // Itera sobre as bebidas e chama a função createFoodElement para cada uma
    DATA.bebidas.forEach(bebida => {
        createFoodElement(bebida, 'bebidas');
    });
}

// Chama a função principal
resgataPizzasLanchesBebidas();
