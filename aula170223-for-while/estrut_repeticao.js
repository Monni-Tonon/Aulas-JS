// Aula 17.02
// Tópicos WHILE, FOR
// Estrutura de repetição = loops = laços

let number = 1;
while(number <= 20){
    console.log(number);
    number++;
}
console.log("Fora do loop: " + number);

// Como somar 1 + 2 + 3 + 4 + 5 + ... + 100 = 5050
let contador = 1;
let sum = 0

while(contador <= 100){
    sum = sum + contador;
    contador++;
}

//console.log(soma);

console.log(" ------ FOR ------");
// Estrutura repetição FOR

/* 
for(inicializacao; condicao; atualizacao){
    o codigo a se repetir
    } 
*/

// 1 até 5
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
}

console.log("-------");
// 5 até 1
for (let contador = 5; contador >= 1; contador--) {
    console.log(contador);
}

console.log("-------");
// 1 + 2 + 3 + 4 + ... + 99 + 100 = ?
    let soma = 0;

for (let i = 1; i <= 100; i++) {
// i de iteração ou index
    soma = soma + i;
}
console.log(soma);
