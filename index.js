import ContaCorrente from "./js/ContaCorrente.js";
import ContaPoupanca from "./js/ContaPoupanca.js";

// declarações conta corrente
const ccTitular = document.querySelector("#cc-titular");
const ccSaldo = document.querySelector("#cc-saldo");
const ccLimite = document.querySelector("#cc-limite");
const ccBtnDepositar = document.querySelector("#cc-btn-depositar");
const ccInput = document.querySelector("#cc-input");
const ccBtnSacar = document.querySelector("#cc-btn-sacar");

// declarações conta poupança
const cpTitular = document.querySelector("#cp-titular");
const cpSaldo = document.querySelector("#cp-saldo");
const cpTaxa = document.querySelector("#cp-taxa");
const cpInput = document.querySelector("#cp-input");
const cpBtnSacar = document.querySelector("#cp-btn-sacar");
const cpBtnDepositar = document.querySelector("#cp-btn-depositar");
const cpBtnRender = document.querySelector("#cp-btn-render");

// Função para adicionar o Historico
function adicionarLog(containerId, texto) {
  const container = document.getElementById(containerId);
  if (container) {
    const p = document.createElement("p");
    p.className = "log-item";
    p.innerText = `[${new Date().toLocaleTimeString()}] ${texto}`;
    container.insertBefore(p, container.firstChild); // Coloca o log mais recente no topo
  }
}

// Função para atualizar e limpar interface
function clearUpdate() {
  atualizarInteface();
  ccInput.value = "";
  cpInput.value = "";
}

// INSTANCIANDO AS CONTAS
const cc = new ContaCorrente("Leo Gomes", 500, 300);
const cp = new ContaPoupanca("Leo Gomes", 2000, 0.005);

// Executa a primeira renderização dos dados na tela
function atualizarInteface() {
  // Atualiza Conta Corrente
  ccTitular.innerText = cc.titular;
  ccSaldo.innerText = `R$ ${cc.saldo.toFixed(2)}`;
  ccLimite.innerText = `R$ ${cc.limite.toFixed(2)}`;

  // Atualiza Conta Poupança
  cpTitular.innerText = cp.titular;
  cpSaldo.innerText = `R$ ${cp.saldo.toFixed(2)}`;
  cpTaxa.innerText = `${(cp.taxaRendimento * 100).toFixed(1)}`;
}

atualizarInteface();
adicionarLog("cc-historico", "Conta corrente aberta.");
adicionarLog("cp-historico", "Conta poupança aberta.");

// EVENTOS - CONTA CORRENTE

// Depositar
ccBtnDepositar.addEventListener("click", () => {
  const valor = parseFloat(ccInput.value);

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido para depósito.");
    return;
  }

  if (cc.depositar(valor)) {
    adicionarLog("cc-historico", `✅ Depositado R$ ${valor.toFixed(2)}`);
  } else {
    adicionarLog(
      "cc-historico",
      `❌ Falha ao depositar R$ ${valor.toFixed(2)} (Valor inválido)`,
    );
  }

  clearUpdate();
});

// Sacar
ccBtnSacar.addEventListener("click", () => {
  const valor = parseFloat(ccInput.value);
  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido para saque.");
    return;
  }

  if (cc.sacar(valor)) {
    adicionarLog("cc-historico", `💸 Sacado R$ ${valor.toFixed(2)}`);
  } else {
    adicionarLog(
      "cc-historico",
      `❌ Falha ao tentar sacar R$ ${valor.toFixed(2)} (Sem saldo/limite)`,
    );
  }

  clearUpdate();
});

// EVENTOS - CONTA POUPANÇA
// sacar
cpBtnSacar.addEventListener("click", () => {
  const valor = parseFloat(cpInput.value);

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido para saque.");
    return;
  }

  if (cp.sacar(valor)) {
    adicionarLog("cp-historico", `💸 Sacado R$ ${valor.toFixed(2)}`);
  } else {
    adicionarLog(
      "cp-historico",
      `❌ Falha ao tentar sacar R$ ${valor.toFixed(2)} (Sem saldo/limite)`,
    );
  }
  clearUpdate();
});

// Depositar
cpBtnDepositar.addEventListener("click", () => {
  const valor = parseFloat(cpInput.value);
  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido.");
    return;
  }

  if (cp.depositar(valor)) {
    adicionarLog("cp-historico", `✅ Depositado R$ ${valor.toFixed(2)}`);
  } else {
    adicionarLog(
      "cp-historico",
      `❌ Falha ao depositar R$ ${valor.toFixed(2)} (Valor inválido)`,
    );
  }

  clearUpdate();
});

// Botão exclusivo da poupança para rodar o rendimento dos juros
cpBtnRender.addEventListener("click", () => {
  //  Pega saldo anterior
  const saldoAnterior = cp.saldo;

  // Chama o método de POO da classe filha
  cp.calcularRendimento();
  const rendimento = cp.saldo - saldoAnterior;

  adicionarLog(
    "cp-historico",
    `📈 Poupança rendeu R$ ${rendimento.toFixed(2)} Juros aplicados.`,
  );
  clearUpdate();
});
