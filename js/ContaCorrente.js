// HERANÇAS - POO
import ContaBancaria from "./ContaBancaria.js";

export default class contaCorrente extends ContaBancaria {
  #limite;

  constructor(titular, saldoInicial = 0, limite = 500) {
    super(titular, saldoInicial);
    this.#limite = limite;
  }

  get limite() {
    return this.#limite;
  }

  // Polimorfismo = alterar um comportamento de um metodo
  sacar(value) {
    if (value < 0) {
      return false;
    }

    // esta passando um limite de credito R$ 500,00
    const saldoLimite = this.saldo + this.#limite;

    if (value > saldoLimite) {
      return false;
    }

    //  se o valor for menor saca o valor do saldo
    if (value <= this.saldo) {
      super.sacar(value);
      return true;
    }

    // armazena quanto falta para cobrir saque
    const resto = value - this.saldo;

    // zera (atualiza o saldo)
    super.sacar(this.saldo);
    this.#limite -= resto;

    return true;
  }
}
