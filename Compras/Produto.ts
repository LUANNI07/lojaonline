// produto.ts
class Produto {
    private id: number;
    private nome: string;
    private preco: number;
    private descricao: string;
    private imagem: string;
  
    constructor(id: number, nome: string, preco: number, descricao: string, imagem: string) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
      this.imagem = imagem;
    }
  
    getId(): number {
      return this.id;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getPreco(): number {
      return this.preco;
    }
  
    getDescricao(): string {
      return this.descricao;
    }
  
    getImagem(): string {
      return this.imagem;
    }
  
    toString(): string {
      return `Produto ${this.nome} - R$ ${this.preco.toFixed(2)}`;
    }
  }
  
  export default Produto;
  
  

const produto1 = new Produto(1, "Livro", 50.00, "Um livro muito interessante", "livro.jpg");
const produto2 = new Produto(2, "Computador", 3000.00, "Um computador muito rápido", "computador.jpg");
const produto3 = new Produto(3, "Celular", 1500.00, "Um celular muito rápido", "celular.jpg");
const produto4 = new Produto(4, "Tablet", 2000.00, "Um tablet muito rápido", "tablet.jpg");
const produto5 = new Produto(5, "Tablet", 3600.00, "Um Smartwatch e inteligente", "smartwatch.jpg");





console.log(produto1.getNome()); // Output:  Produto Livro R$ 50.00
console.log(produto2.getPreco()); // Output: Produto Computador R$ 3.000
console.log(produto3.toString()); // Output: Produto Celular - R$ 1.500
console.log(produto4.toString()); // Output: Produto Tablet - R$ 2.000
console.log(produto5.toString()); // Output: Produto Smartwatch- R$ 3.600


