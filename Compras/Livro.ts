// livro.ts
import Produto from "./produto";

class Livro {
  private titulo: string;
  private autor: string;
  private editora: string;
  private anoPublicacao: number;
  private genero: string;
  private numeroPaginas: number;
  private idioma: string;
  private formato: string; 
  private peso: number; 
  private dimensoes: {
    altura: number; 
    largura: number;
    profundidade: number; 
  };
  private preco: number;
  private descricao: string;

  constructor(
    titulo: string,
    autor: string,
    editora: string,
    anoPublicacao: number,
    genero: string,
    numeroPaginas: number,
    idioma: string,
    formato: string,
    peso: number,
    dimensoes: {
      altura: number;
      largura: number;
      profundidade: number;
    },
    preco: number,
    descricao: string
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
    this.numeroPaginas = numeroPaginas;
    this.idioma = idioma;
    this.formato = formato;
    this.peso = peso;
    this.dimensoes = dimensoes;
    this.preco = preco;
    this.descricao = descricao;
  }

  Titulo(): string {
    return this.titulo;
  }
Autor(): string {
    return this.autor;
  }

  Editora(): string {
    return this.editora;
  }

AnoPublicacao(): number {
    return this.anoPublicacao;
  }

  Genero(): string {
    return this.genero;
  }

  getNumeroPaginas(): number {
    return this.numeroPaginas;
  }

  getIdioma(): string {
    return this.idioma;
  }

  getFormato(): string {
    return this.formato;
  }

  getPeso(): number {
    return this.peso;
  }

  Dimensoes(): {
    altura: number;
    largura: number;
    profundidade: number;
  } {
    return this.dimensoes;
  }

  Preco(): number {
    return this.preco;
  }

  Descricao(): string {
    return this.descricao;
  }

  descricaoDetalhada(): string {
    return `Livro "${this.titulo}" de ${this.autor}, publicado pela ${this.editora} em ${this.anoPublicacao}. Gênero: ${this.genero}. Número de páginas: ${this.numeroPaginas}. Idioma: ${this.idioma}. Formato: ${this.formato}. Peso: ${this.peso}g. Dimensões: ${this.dimensoes.altura}cm x ${this.dimensoes.largura}cm x ${this.dimensoes.profundidade}cm. Preço: R$ ${this.preco}. Descrição: ${this.descricao}`;
  }
}








