const produtos = [
    {
      id: 1,
      nome: "Hambúrguer",
      preco: 20,
    },
    {
      id: 2,
      nome: "Pizza",
      preco: 30,
    },
    {
      id: 3,
      nome: "Macarrão",
      preco: 15,
    },
    {
      id: 4,
      nome: "Sanduíche",
      preco: 10,
    },
    {
      id: 5,
      nome: "Salada",
      preco: 12,
    },
    {
      id: 6,
      nome: "Sorvete",
      preco: 10,
    },
    {
      id: 7,
      nome: "Batata frita",
      preco: 5,
    },
    {
      id: 8,
      nome: "Pão de queijo",
      preco: 7,
    },
    {
      id: 9,
      nome: "Churros",
      preco: 5,
    },
    {
      id: 10,
      nome: "Pastel",
      preco: 8,
    },
    {
      id: 11,
      nome: "Açaí",
      preco: 15,
    },
    {
      id: 12,
      nome: "Suco",
      preco: 7,
    },
  ];

  // 1. Com for(of) faça.
  // O preço que fica 3 churros
  // exemplo de retorno: 15 R$

  for (const produto of produtos) {
        if (produto.id === 9) {
            console.log(produto.preco * 3)
        }
    }

  // 2. Com for(of) faça.
  // se for Pastel e um Suco o preço que fica.
  // exemplo de retorno: 15R$
  
  let pastel = 0
  let suco = 0
  for (const produto of produtos) {
        if (produto.id === 10) {
            pastel = pastel + produto.preco * 3
        }
        if (produto.id === 12) {
            suco = suco + produto.preco * 5
        } 
  }   
console.log(pastel + suco)  