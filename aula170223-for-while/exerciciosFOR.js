//Realize os mesmos exercicios feitos Com WHILE, com o FOR:

//Exercicio I: Tabuada de 5
// 1 x 5 = 5
// 2 x 5 = 10
// ...
// 10 x 5 = 50
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i*5}`);    
}

console.log( "----" );
//Exercicio II:  Va do 1 ao 99 e mostre apenas os valores impares (IF dentro do WHILE)
for (let a = 1; a < 100; a++){
    if(a % 2 == 1){
    console.log(`número: ${a} é impar.`);}
}


console.log( "----" );
// Exercício III: Conte de 50 até 75
for (let i = 50; i < 76; i++) {
    console.log(i);  
}