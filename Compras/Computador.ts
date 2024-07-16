// computador.ts

import Produto from "./produto";
class Computador {
  private marca: string;
  private modelo: string;
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
    velocidade: number;
  };
  private placaMae: {
    marca: string;
    modelo: string;
    chipset: string;
  };
  private placaDeVideo: {
    marca: string;
    modelo: string;
    memoria: number
  };
  private fonteDeAlimentacao: {
    potencia: number; /
    eficiencia: string; 
  };
  private preco: number;

  constructor(
    marca: string,
    modelo: string,
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
      velocidade: number;
    },
    placaMae: {
      marca: string;
      modelo: string;
      chipset: string;
    },
    placaDeVideo: {
      marca: string;
      modelo: string;
      memoria: number;
    },
    fonteDeAlimentacao: {
      potencia: number;
      eficiencia: string;
    },
    preco: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.processador = processador;
    this.memoriaRam = memoriaRam;
    this.armazenamento = armazenamento;
    this.placaMae = placaMae;
    this.placaDeVideo = placaDeVideo;
    this.fonteDeAlimentacao = fonteDeAlimentacao;
    this.preco = preco;
  }

  getMarca(): string {
    return this.marca;
  }

  getModelo(): string {
    return this.modelo;
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

  getMemoriaRam(): {
    capacidade: number;
    tipo: string;
    velocidade: number;
  } {
    return this.memoriaRam;
  }

  getArmazenamento(): {
    tipo: string;
    capacidade: number;
    velocidade: number;
  } {
    return this.armazenamento;
  }

  getPlacaMae(): {
    marca: string;
    modelo: string;
    chipset: string;
  } {
    return this.placaMae;
  }

  getPlacaDeVideo(): {
    marca: string;
    modelo: string;
    memoria: number;
  } {
    return this.placaDeVideo;
  }

  getFonteDeAlimentacao(): {
    potencia: number;
    eficiencia: string;
  } {
    return this.fonteDeAlimentacao;
  }

  getPreco(): number {
    return this.preco;
  }

  descricao(): string {
    return `Computador ${this.marca} ${this.modelo} com processador ${this.processador.marca} ${this.processador.modelo} ${this.processador.frequencia}GHz, ${this.memoriaRam.capacidade}GB de RAM ${this.memoriaRam.tipo} ${this.memoriaRam.velocidade}MHz, ${this.armazenamento.capacidade}GB de ${this.armazenamento.tipo} ${this.armazenamento.velocidade}RPM, placa-mãe ${this.placaMae.marca} ${this.placaMae.modelo} ${this.placaMae.chipset}, placa de vídeo ${this.placaDeVideo.marca} ${this.placaDeVideo.modelo} ${this.placaDeVideo.memoria}GB, fonte de alimentação ${this.fonteDeAlimentacao.potencia}W ${this.fonteDeAlimentacao.eficiencia}, por R$ ${this.preco}`;
  }
}

/*class Computador extends Produto {
    private processador: string;
    private memoriaRam: number;
  
    constructor(id: number, nome: string, preco: number, descricao: string, imagem: string, processador: string, memoriaRam: number) {
      super(id, nome, preco, descricao, imagem);
      this.processador = processador;
      this.memoriaRam = memoriaRam;
    }
  
    getProcessador(): string {
      return this.processador;
    }
  
    getMemoriaRam(): number {
      return this.memoriaRam;
    }
  
    toString(): string {
      return `Computador ${this.nome} - R$ ${this.preco.toFixed(2)} - Processador: ${this.processador} - Memória RAM: ${this.memoriaRam}GB`;
    }
  }
  
  export default Computador;*/
  