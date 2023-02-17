//Exercicio I: Tabuada de 5
// 1 x 5 = 5
// 2 x 5 = 10
// ...
// 10 x 5 = 50

let mult = 1;

while(mult <= 10){
    let resultado = mult * 5;
    console.log(`${mult} x 5 = ${resultado}`);
    mult++
} ;

console.log( "----" );
//Exercicio II:  Va do 1 ao 99 e mostre apenas os valores impares (IF dentro do WHILE)
let numero = 1;

while(numero <= 99){
    if(numero % 2 == 1){
    console.log(numero)} 
    numero++;
}



console.log( "----" );
// Exercício III: Conte de 50 até 75
let conte = 50;

while(conte <= 75){
    console.log(conte);
    conte++;
}
console.log("Fora do loop: " + conte);