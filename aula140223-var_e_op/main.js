//Dia 14/02
//Variaveis e operadores

//declaração de variáveis:
//let nome_variavel;

//atribuindo valor a variável:
let nome = "Monnicy";

//print:
console.log(nome);

//declaração de variavel numerica:
let idade = 25;     //or
idade = 30;

//concatenação de variaveis:
console.log("Meu nome é " + nome +" e tenho " + idade + " anos.");

//variavel const (constante) nao há como reatribuir o valor.
const cpf = "123.456.789-00"

//=====================================================

//OPERADORES ARITMETICOS
//soma
let soma = 200 + 300;
console.log(soma);

//subtração
let sub = 200 - 55;
console.log(sub);

//multiplicação
let mult = 2 * 8;
console.log(mult);

//divisão
let div = 2 / 8;
console.log(div);

//resto de uma divisão
let rest = 10 % 2;
console.log("O resto da divisão de 10/2 é " + rest);

//uma expressao matemática
let expressao = soma + sub * div;
let expressao1 = (soma + sub) * div;
console.log("O resultado da expressão é " + expressao + "!");

//Outra forma de declarar a concatenação no print: `${variavel}`
console.log(`O resultado da expressão 1 é ${expressao1}!`);

//Incrementando a variavel: contadores
let i = 0;
i = i + 1; // o novo valor de i é 0 + 1 = 1
i = i + 1; // o novo valor de i é 1 + 1 = 2
i = i + 1; // o novo valor de i é 2 + 1 = 3
console.log("Valor de i é " + i);

//Outra forma de declarar o contador
let x = 0;
x++; // x = 0 + 1
x++; // x = 1 + 1
x--; // x = x - 1

//Operadores relacionais (>, <, >=, <=, ==, !=, ===)
let a = 3;
let b = 5;
console.log(`sendo a= 3 e b= 5, a é maior que b? ${a > b}`);
console.log(`sendo a= 3 e b= 5, a é menor que b? ${a < b}`);
console.log(a == "3") //compara a variavel com o VALOR, ou seja, TRUE
console.log(a === "3"); // compara a variavel com VALOR e TIPO , ou seja FALSE 