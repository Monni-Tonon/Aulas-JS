// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

let nota1 = 3;
let nota2 = 5;
let nota3 = 9;
let media = nota1 + nota2 + nota3 / 3;
let aprovado = media >= 7;
let reforco = media >5 && media < 6.99;
let reprovado = media <= 5;

console.log(`Media: ${media}`)
if(media >= 7){
    console.log(`Media igual a ${media}. Aprovado!`)
} else if(media >5 && media < 6.99){
    console.log(`Media igual a ${media}. Dá pra recuperar!`)
} else {
    console.log(`Media igual a ${media}. Infelizmente vc não passou! :()`)
}

console.log( )

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.
// abaixo do peso =< 18,5
// peso normal = entre 18,5 e 24,9
// sobrepeso = 25 - 29,99
// obesidade grau I = 30 - 34,9
// obesidade grau II = 35 - 39,9
// obesidade grau III/ morbida = >= 40

let peso = 90;
let altura = 1.66;
let imc = peso / (altura * altura); //ou altura**2 = altura elevado ao quadrado
console.log(`Meu IMC é ${imc.toFixed(2)}`)

if(imc < 18.5){
    console.log("Voce está abaixo do peso.")
} else if( imc >= 18.5 && imc < 25){
    console.log("Voce esta dentro do peso normal.")
} else if( imc >= 25 && imc < 30){
    console.log("Voce está com sobrepeso!")
} else if(imc >= 30 && imc < 35){
    console.log("Voce dentro da obesidade de I grau.")
} else if(imc >= 35 && imc < 40){
    console.log("Voce está com obesidade de II grau!")
} else {
    console.log("Voce está com ovesidade mórbida (Grau III)")
}

console.log( )

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!

let numA = 3;
let numB = 6;

if(numA > numB){
    console.log(`O numero A ${numA} é maior que numero B ${numB}!`)
} else if(numA < numB){
    console.log(`O numero A ${numA} é menor que o numero B ${numB}`)
} else {
    console.log( `Os numeros A ${numA} e B ${numB} sao iguais`)
}