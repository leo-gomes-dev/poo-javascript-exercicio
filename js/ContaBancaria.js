export default class ContaBancaria {
  // Declarando a propriedade privada obrigatoriamente no topo da classe
  #saldo;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    // Se o saldo inicial for maior que zero, define ele. Se não, começa com zero.
    this.#saldo = saldoInicial > 0 ? saldoInicial : 0;
  }

  // Apenas o GET para permitir a leitura do saldo por fora da classe
  get saldo() {
    return this.#saldo;
  }

  // Método depositar: altera o this.#saldo internamente após validar
  depositar(value) {
    if (value < 0) {
      return false;
    }

    this.#saldo += value;
    return true;
  }

  // Método sacar: altera o this.#saldo internamente após validar
  sacar(value) {
    if (value < 0) {
      return false;
    }

    if (value > this.#saldo) {
      return false;
    }

    this.#saldo -= value;

    return true;
  }
}
