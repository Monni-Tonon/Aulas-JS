// Operadores lógicos:NOT: (!), AND: (&&), OR: (||)

/*
    Tabela Verdade (E)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/
/* 
    Tabela Verdade (OU)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/
/* 
TABELA (NOT)
!true = false
!false = true
*/

// Operador NOT (!) = Inverte o valor lógico
let ligado = true; //é verdade que está ligado
//let ligado = false;
let desligado = !ligado; // não-ligado.é falso que está ligado. 

console.log(`é ${ligado} que o carro está ligado.`)
console.log(`é ${desligado} que o carro está desligado.`)

// Operador AND (&&) = Todas as expressoes tem que ser true
let gasTanque = 1;
let reserva = gasTanque <5;
let abastecer = desligado && reserva;
let viajar = ligado && !reserva; //pode viajar se está ligado E nao está na reserva.
let emCasa = !viajar;

console.log(`o carro está na reserva? ${reserva}.`);
console.log(`é hora de abastecer? ${abastecer}.`);
console.log(`pode viajar? ${viajar}.`)
console.log(`Vai ficar em casa? ${emCasa}.`)

// Operador OR (|| = Basta uma expressão ser TRUE)
let taPodendo = viajar || abastecer;

console.log(`pode viajar? ${taPodendo}.`)

let idade = 30;
let podeBeber = idade >= 18 && idade <= 59;
let podeDirigir = idade >= 18 || idade <= 59;

console.log(`Ela tem ${idade} anos. essa pessoa pode beber? ${podeBeber}.`);
console.log(`Essa pessoa pode dirigir? ${podeDirigir}.`);

let media = 8.5;
let temIngles = true;
let aprovado = media >= 7;
let contratado = aprovado && temIngles;

console.log(`Candidato aprovado? ${contratado}.`)

let x = 5;
let y = 10;

let expressao = x > 3 && y < 20; //true
let expressao2 = !(x === 5); // false
let expressao3 = y != 20 || x >= 20; // true
let expressao4 = y === 100 || x < 10; // true

//exemplo de condicao com op logico utilizando a var idade
if(idade >= 18 && idade <= 59){
    console.log(`Idade: ${idade}`);
    console.log("Voce pode beber. Mas com moderação!");
 } else{
    console.log("Voce não pode beber, danado!");
    }
