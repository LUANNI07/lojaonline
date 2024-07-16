
  let menu = new Menu();
  let carrinho = new Carrinho();
  
  menu.mostrarMenu();
  
  while (true) {
    let escolha = ("Escolha uma opção:\n1 - Adicionar produto ao carrinho\n2 - Remover produto do carrinho\n3 - Ver carrinho\n4 - Sair");
    switch (escolha) {
      case 1:
        let produtoId =("Escolha um produto (1-5): ");
        let produto = menu.escolherProduto(produtoId);
        if (produto !== null) {
          carrinho.adicionarProduto(produto);
        } else {
          console.log("Produto não encontrado.");
        }
        break;
      case 2:
        let produtoRemoverId = ("Escolha um produto para remover (1-5): ");
        let produtoRemover = menu.escolherProduto(produtoRemoverId);
        if (produtoRemover !== null) {
          carrinho.removerProduto(produtoRemover);
        } else {
          console.log("Produto não encontrado no carrinho.");
        }
        break;
      case 3:
        console.log(carrinho.toString());
        break;
      case 4:
        console.log("Saindo...");
        return;
      default:
        console.log("Opção inválida.");
    }
}





