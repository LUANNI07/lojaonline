// smartwatch.ts
import Produto from "./produto";

class Smartwatch {
  private marca: string;
  private modelo: string;
  private sistemaOperacional: string;
  private tela: {
    tamanho: number;
    resolucao: string; 
    tipo: string; 
  };
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
  private conexao: {
    tipo: string;
    versao: string; 
  };
  private sensor: {
    tipo: string;
    quantidade: number;
  };
  private bateria: {
    capacidade: number;
    tipo: string;
    autonomia: number; 
  };
  private resistencia: {
    agua: boolean;
    poeira: boolean;
  };
  private preco: number;

  constructor(
    marca: string,
    modelo: string,
    sistemaOperacional: string,
    tela: {
      tamanho: number;
      resolucao: string;
      tipo: string;
    },
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
    conexao: {
      tipo: string;
      versao: string;
    },
    sensor: {
      tipo: string;
      quantidade: number;
    },
    bateria: {
      capacidade: number;
      tipo: string;
      autonomia: number;
    },
    resistencia: {
      agua: boolean;
      poeira: boolean;
    },
    preco: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.sistemaOperacional = sistemaOperacional;
    this.tela = tela;
    this.processador = processador;
    this.memoriaRam = memoriaRam;
    this.armazenamento = armazenamento;
    this.conexao = conexao;
    this.sensor = sensor;
    this.bateria = bateria;
    this.resistencia = resistencia;
    this.preco = preco;
  }

  getMarca(): string {
    return this.marca;
  }

  getModelo(): string {
    return this.modelo;
  }

  getSistemaOperacional(): string {
    return this.sistemaOperacional;
  }

  getTela(): {
    tamanho: number;
    resolucao: string;
    tipo: string;
  } {
    return this.tela;
  }

  getProcessador(): {
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

  Conexao(): {
    tipo: string;
    versao: string;
  } {
    return this.conexao;
  }

  Sensor(): {
    tipo: string;
    quantidade: number;
  } {
    return this.sensor;
  }

  Bateria(): {
    capacidade: number;
    tipo: string;
    autonomia: number;
  } {
    return this.bateria;
  }

  Resistencia(): {
    agua: boolean;
    poeira: boolean;
  } {
    return this.resistencia;
  }

  Preco(): number {
    return this.preco;
  }

  descricao(): string {
    return `Smartwatch ${this.marca} ${this.modelo} com sistema operacional ${this.sistemaOperacional}, tela ${this.tela.tamanho} polegadas ${this.tela.resolucao} ${this.tela.tipo}, processador ${this.processador.marca} ${this.processador.modelo} ${this.processador.frequencia}GHz, ${this.memoriaRam.capacidade}MB de RAM ${this.memoriaRam.tipo} ${this.memoriaRam.velocidade}MHz, ${this.armazenamento.capacidade}GB de ${this.armazenamento.tipo}, conexão ${this.conexao.tipo} ${this.conexao.versao}, sensor ${this.sensor.tipo} ${this.sensor.quantidade}x, bateria ${this.bateria.capacidade}mAh ${this.bateria.tipo} com autonomia de ${this.bateria.autonomia} dias, resistência à água ${this.resistencia.agua} e poeira ${this.resistencia.poeira}, por R$ ${this.preco}`;
  }
}










/*class Smartwatch extends Produto {
    private tamanhoTela: number;
    private compatibilidade: string;
  
    constructor(id: number, nome: string, preco: number, descricao: string, imagem: string, tamanhoTela: number, compatibilidade: string) {
      super(id, nome, preco, descricao, imagem);
      this.tamanhoTela = tamanhoTela;
      this.compatibilidade = compatibilidade;
    }
  
    getTamanhoTela(): number {
      return this.tamanhoTela;
    }
  
    getCompatibilidade(): string {
      return this.compatibilidade;
    }
  
    toString(): string {
      return `Smartwatch ${this.getNome} - R$ ${this.getPreco} - Tamanho da tela: ${this.tamanhoTela} polegadas - Compatibilidade: ${this.compatibilidade}`;
    }
  }
  
  export default Smartwatch;
  */