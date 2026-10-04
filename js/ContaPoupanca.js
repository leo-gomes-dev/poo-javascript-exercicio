import ContaBancaria from "./ContaBancaria.js";

export default class ContaPoupanca extends ContaBancaria {
  #taxaRendimento;

  constructor(titular, saldoInicial = 0, taxaRendimento = 0.005) {
    super(titular, saldoInicial);
    this.#taxaRendimento = taxaRendimento;
  }

  get taxaRendimento() {
    return this.#taxaRendimento;
  }

  calcularRendimento() {
    const rendimento = this.saldo * this.#taxaRendimento;
    super.depositar(rendimento);
  }
}
