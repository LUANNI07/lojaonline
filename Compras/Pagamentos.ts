// pagamento.ts


class Pagamento {
  private tipoPagamento: TipoPagamento;
  private valor: number;

  constructor(tipoPagamento: TipoPagamento, valor: number) {
    this.tipoPagamento = tipoPagamento;
    this.valor = valor;
  }

  TipoPagamento(): TipoPagamento {
    return this.tipoPagamento;
  }

  Valor(): number {
    return this.valor;
  }

  realizarPagamento(): void {
    switch (this.tipoPagamento) {
      case TipoPagamento.CARTAO_CREDITO:
        console.log(`Realizando pagamento de R$ ${this.valor} com cartão de crédito`);
        break;
      case TipoPagamento.BOLETO:
        console.log(`Realizando pagamento de R$ ${this.valor} com boleto`);
        break;
      case TipoPagamento.PIX:
        console.log(`Realizando pagamento de R$ ${this.valor} com PIX`);
        break;
      default:
        throw new Error(`Tipo de pagamento não suportado`);
    }
  }
}

enum TipoPagamento {
  CARTAO_CREDITO,
  BOLETO,
  PIX
}


