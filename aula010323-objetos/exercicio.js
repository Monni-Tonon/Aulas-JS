// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
    cod: 0001,
    saldo: 600.00,
    nome: "José Aldo",
    cpf: "111.222.333.44",
    saque(valor) {
        this.saldo -= valor;
        console.log(`${this.nome} o seu saldo é R$${this.saldo}`);
    },
    deposito(valor) {
        this.saldo += valor;
        console.log(`${this.nome} o seu saldo é R$${this.saldo}`);
    },
    };
    
    console.log(conta.saldo);
    conta.saque(150);
    conta.deposito(50);

console.log(" ----------------------------------- ");
// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o preço aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
    nome: "chapéu",
    descrição: "material: palha dourada",
    qtd: 200,
    precOriginal: 99.00,
    desconto: 23,
    calcPrecoDesc() {
        let novoValor = this.precOriginal - this.desconto;     //criacao de nova variavel para receber o novo valor.
        console.log(`O preço do ${this.nome} com desconto aplicado é de ${novoValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        return novoValor;
    },
    apresentacao() {
        console.log(this);
    },
    compra(total) {
        this.qtd -= total;
        console.log(`Foi realizada a compra de ${total} unidades do ${this.nome}, temos agora em estoque o total de ${this.qtd} unidades.`)
    },
};

produto.apresentacao();
console.log(produto.calcPrecoDesc());
produto.compra(5);
console.log(produto.qtd);

// -----------------------------------------------------------------

  // RESOLUÇÃO DO PROFESSOR
  let produto1 = {
    // Atributos/propriedades
    nome: "Relojim",
    descricao: "Indica a hora os minutos e os segundos",
    quantidade: 100,
    precoOriginal: 500,
    desconto: 30,
    // Métodos
    calcularPrecoDesconto() {
      let precoCompra = this.precoOriginal - this.desconto;
      return precoCompra;
    },
    apresentacao() {
      console.log(this);
    },
    comprar(total) {
      this.quantidade -= total;
    },
  };
  
  produto1.apresentacao();
  produto1.comprar(20);
  produto1.comprar(20);
  console.log(produto1.quantidade);
  console.log(produto1.calcularPrecoDesconto());
  