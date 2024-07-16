// menu.ts

import Produto from "./produto";



class Menu {
  private itens: MenuItem[];

  constructor() {
    this.itens = [];
  }

  adicionarItem(item: MenuItem): void {
    this.itens.push(item);
  }

  removerItem(item: MenuItem): void {
    const index = this.itens.indexOf(item);
    if (index!== -1) {
      this.itens.splice(index, 1);
    }
  }

  getItens(): MenuItem[] {
    return this.itens;
  }

  exibirMenu(): void {
    console.log("Menu:");
    this.itens.forEach((item, index) => {
      console.log(`${index + 1}. ${item.nome} - R$ ${item.preco}`);
    });
  }

  ordenarItensPorPreco(): void {
    this.itens.sort((a, b) => a.preco - b.preco);
  }

  buscarItemPorNome(nome: string): MenuItem | null {
    return this.itens.find((item) => item.nome === nome) || null;
  }
}

class MenuItem {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}


