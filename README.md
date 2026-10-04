# Desafio: Sistema Bancário Prático com POO em JavaScript

Olá, dev! Seja muito bem-vindo ao nosso laboratório prático de **Programação Orientada a Objetos (POO)** com JavaScript Puro (Vanilla JS). 

Este repositório foi preparado pelo **Professor Leo Gomes Dev** para ajudar você a dar os primeiros passos na criação de arquiteturas modulares, aplicando conceitos reais de mercado como Encapsulamento, Herança e Polimorfismo.

---

## Objetivo do Exercício

O objetivo deste exercício é construir e corrigir a lógica de um **Sistema Bancário Interativo** simulado diretamente no navegador. Você vai trabalhar com a manipulação de propriedades privadas nativas (`#`), métodos de classe, herança estrutural e sincronização dos dados com elementos do DOM (HTML/CSS).

### O que você vai praticar:
* **Abstração:** Modelar entidades do mundo real (Contas Bancárias) em código limpo.
* **Encapsulamento Real:** Proteger dados sensíveis (como o saldo) usando o prefixo `#`.
* **Herança:** Criar classes filhas especializadas (`ContaCorrente` e `ContaPoupanca`) estendendo uma superclasse.
* **Polimorfismo:** Modificar o comportamento de métodos existentes (como a regra de saque com cheque especial).
* **Módulos ES6:** Organizar o projeto separando cada classe em seu respectivo arquivo com `import` e `export`.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```text
├── css/
│   └── style.css            # Estilização visual do painel bancário
├── js/
│   ├── ContaBancaria.js     # Classe Pai (Superclasse)
│   ├── ContaCorrente.js     # Classe Filha (Especializada com Limite)
│   └── ContaPoupanca.js     # Classe Filha (Especializada com Rendimento)
├── index.html               # Estrutura visual e painel de controle
└── index.js                 # Arquivo central responsável pelas escutas do DOM
```

---

## Como Começar (Passo a Passo)

1. **Clonar o Repositório:**
   Abra o seu terminal e clone este repositório para a sua máquina:
   ```bash
   git clone https://github.com/leo-gomes-dev/poo-javascript-exercicio.git
   ```

2. **Abrir no Editor:**
   Abra a pasta do projeto no seu VS Code.

3. **Rodar com Servidor Local:**
   Como estamos utilizando módulos oficiais do JavaScript (`type="module"`), os navegadores bloqueiam requisições locais por segurança (erros de CORS). Para rodar:
   * Instale a extensão **Live Server** no VS Code.
   * Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.

---

## Lista de Tarefas & Desafios para o Aluno

Abra os arquivos e complete/corrija os códigos seguindo as missões abaixo:

### Missão 1: O Escudo do Saldo (`ContaBancaria.js`)
* Garanta que a propriedade `#saldo` seja estritamente privada.
* Crie o método público `get saldo` para permitir que o saldo seja apenas lido por fora, nunca alterado diretamente.
* Implemente proteções nos métodos `depositar(value)` e `sacar(value)` impedindo valores negativos ou saques maiores que o saldo em conta.
* **Atenção:** Remova os `console.log` de dentro da classe! Ela deve ser silenciosa e apenas retornar `true` ou `false` se a operação der certo ou errado.

### Missão 2: A Matemática do Cheque Especial (`ContaCorrente.js`)
* Use a palavra-chave `extends` para herdar as características de `ContaBancaria`.
* No construtor, chame obrigatoriamente o método `super(titular, saldoInicial)` antes de definir o `#limite` privado.
* Reescreva o método `sacar(value)` (Polimorfismo). Ele deve permitir saques que usem o saldo combinado ao limite de crédito. Se o saldo não for suficiente, calcule o `resto`, ative o `super.sacar` para esvaziar o saldo real e deduza o que sobrou do limite.

### Missão 3: Fazendo o Dinheiro Render (`ContaPoupanca.js`)
* Crie uma classe para a poupança que herde de `ContaBancaria`.
* Crie uma propriedade privada para a `#taxaRendimento` (ex: `0.005` para 0.5%).
* Crie o método `calcularRendimento()`. Ele deve pegar o saldo atual, multiplicar pela taxa e aplicar o acréscimo utilizando o método `this.depositar()` herdado do pai.

### Missão 4: A Ponte da Interface (`index.js`)
* Complete a função `atualizarInterface()` injetando os valores lidos dos objetos nos elementos HTML (`innerText`).
* Ajuste as escutas de evento (`addEventListener`) utilizando `parseFloat()` nos inputs e controlando as mensagens através de condicionais `if/else` baseadas nas respostas das classes.
* **Desafio Extra:** Refatore a limpeza de campos criando uma função auxiliar para limpar e resetar os inputs após as ações bem-sucedidas.

---

## Canal de Apoio & Contato

Se você travar em alguma regra ou lógica, não se desespere! Utilize os links abaixo para consultar o material de apoio ou falar diretamente comigo:

* **Perfil no GitHub:** [leo-gomes-dev](https://github.com/leo-gomes-dev)
* **Repositório Original:** [Acessar Código](https://github.com/leo-gomes-dev/poo-javascript-exercicio.git)

---

> *"O sucesso no desenvolvimento de software não vem de decorar códigos, mas de treinar a lógica e entender como os blocos se conectam."*  
> — **Prof. Leo Gomes**
