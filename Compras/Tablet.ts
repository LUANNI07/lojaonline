// tablet.ts
import Produto from "./produto";




class Tablet {
  private marca: string;
  private modelo: string;
  private sistemaOperacional: string; 
  private processador: {
    marca: string;
    modelo: string;
    frequencia: number;
    nucleos: number;
    threads: number;
  };
  private memoriaRam: {
    capacidade: number;
    tipo: string; 
    velocidade: number; 
  };
  private armazenamento: {
    tipo: string;
    capacidade: number;
  };
  private tela: {
    tamanho: number;
    resolucao: string; 
  };
  private camera: {
    principal: {
      resolucao: number; 
      tipo: string; 
    };
    frontal: {
      resolucao: number;
      tipo: string;
    };
  };
  private bateria: {
    capacidade: number; 
    tipo: string;
  };
  private conectividade: {
    rede: string; 
    wifi: string; 
    bluetooth: string;
  };
  private preco: number;

  constructor(
    marca: string,
    modelo: string,
    sistemaOperacional: string,
    processador: {
      marca: string;
      modelo: string;
      frequencia: number;
      nucleos: number;
      threads: number;
    },
    memoriaRam: {
      capacidade: number;
      tipo: string;
      velocidade: number;
    },
    armazenamento: {
      tipo: string;
      capacidade: number;
    },
    tela: {
      tamanho: number;
      resolucao: string;
    },
    camera: {
      principal: {
        resolucao: number;
        tipo: string;
      };
      frontal: {
        resolucao: number;
        tipo: string;
      };
    },
    bateria: {
      capacidade: number;
      tipo: string;
    },
    conectividade: {
      rede: string;
      wifi: string;
      bluetooth: string;
    },
    preco: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.sistemaOperacional = sistemaOperacional;
    this.processador = processador;
    this.memoriaRam = memoriaRam;
    this.armazenamento = armazenamento;
    this.tela = tela;
    this.camera = camera;
    this.bateria = bateria;
    this.conectividade = conectividade;
    this.preco = preco;
  }

  Marca(): string {
    return this.marca;
  }

  Modelo(): string {
    return this.modelo;
  }

  SistemaOperacional(): string {
    return this.sistemaOperacional;
  }

Processador(): {
    marca: string;
    modelo: string;
    frequencia: number;
    nucleos: number;
    threads: number;
  } {
    return this.processador;
  }

  MemoriaRam(): {
    capacidade: number;
    tipo: string;
    velocidade: number;
  } {
    return this.memoriaRam;
  }
Armazenamento(): {
    tipo: string;
   capacidade: number;
  } {
    return this.armazenamento;
  }

Tela(): {
    tamanho: number;
    resolucao: string;
  } {
    return this.tela;
  }

Camera(): {
    principal: {
      resolucao: number;
      tipo: string;
    };
    frontal: {
      resolucao: number;
      tipo: string;
    };
  } {
    return this.camera;
  }

Bateria(): {
    capacidade: number;
    tipo: string;
  } {
    return this.bateria;
  }

Conectividade(): {
    rede: string;
    wifi: string;
    bluetooth: string;
  } {
    return this.conectividade;
  }

Preco(): number {
    return this.preco;
  }

  descricao(): string {
    return `Tablet ${this.marca} ${this.modelo} com sistema operacional ${this.sistemaOperacional}, processador ${this.processador.marca} ${this.processador.modelo} ${this.processador.frequencia}GHz, ${this.memoriaRam.capacidade}GB de RAM ${this.memoriaRam.tipo} ${this.memoriaRam.velocidade}MHz, ${this.armazenamento.capacidade}GB de ${this.armazenamento.tipo}, tela ${this.tela.tamanho} polegadas ${this.tela.resolucao}, câmera ${this.camera.principal.resolucao}MP ${this.camera.principal.tipo} principal e ${this.camera.frontal.resolucao}MP ${this.camera.frontal.tipo} frontal, bateria ${this.bateria.capacidade}mAh ${this.bateria.tipo}, conectividade ${this.conectividade.rede} ${this.conectividade.wifi} ${this.conectividade.bluetooth}, por R$ ${this.preco}`;
  }
}
  





/*


class Tablet extends Produto {
    private tamanhoTela: number;
    private sistemaOperacional: string;
  
    constructor(id: number, nome: string, preco: number, descricao: string, imagem: string, tamanhoTela: number, sistemaOperacional: string) {
      super(id, nome, preco, descricao, imagem);
      this.tamanhoTela = tamanhoTela;
      this.sistemaOperacional = sistemaOperacional;
    }
  
    getTamanhoTela(): number {
      return this.tamanhoTela;
    }
  
    getSistemaOperacional(): string {
      return this.sistemaOperacional;
    }
  
    toString(): string {
      return `Tablet ${this.getNome} R$ ${this.getPreco} - Tamanho da tela: ${this.tamanhoTela} polegadas - Sistema operacional: ${this.sistemaOperacional}`;
    }
  }
  
  export default Tablet;
  */
  