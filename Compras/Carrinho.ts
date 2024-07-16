// carrinho.ts
import Produto from "./produto";
import Celular from "./Celular";
import Computador from "./Computador";
import Smartwatch from "./Smartwatch";
import Livro from "./Livro"



class Carrinho {
    private produtos: Produto[];
  
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto: Produto) {
      this.produtos=produto
      console.log(`Produto adicionado ao carrinho: ${this.produto}`);
    }
  
    removerProduto(produto: Produto) {
      const  = this.produtos(produto);
      if (!== -1) {
        this.produtos(index, 1);
        console.log(`Produto removido do carrinho: ${this.produto}`);
      } else {
        console.log("Produto não encontrado no carrinho.");
      }
    }
  
  Produtos(): Produto[] {
      return this.produtos;
    }
  
  Total(): number {
      let total = 0;
      for (let i = 0; i < this.produtos. i++) {
        total += this.produtos ,this.Preco();
      }
      return total;
    }

    limparCarrinho(): void {
      this.produtos = [];
    }
  String(): string {
      let carrinho = "Carrinho";
      for (let i = 0; i < this.produtos.length; i++) {
        carrinho  {` - ${this.produtos}`;}
      }
      carrinho  {`Total: R$ ${this.total}`};
      return carrinhoString;
    }
  }



  

  