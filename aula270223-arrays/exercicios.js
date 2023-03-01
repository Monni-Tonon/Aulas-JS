// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

function exerc1(){
    
    let soma = 0;

    const arr = [6,5,4,3,76,5,32,28,9,32];

    for(let numero of arr){
        soma += numero;
    }

    return soma;
}
console.log(exerc1());


// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

function exerc2(){
    let notas = [7.0,5.0,8.6,10.0,2];

    let media = 0;
    let soma  = 0;

    for(let i = 0; i < notas.length; i++){
        soma += notas[i];
    }
    media = soma / 5 ;

    return media;
}

console.log(exerc2());

//ou da seguinte forma:
// function exerc2(){

//     let notas = [7.0,5.0,8.6,10.0,2];

//     let media = 0;
//     let soma  = 0;

//     for(let nota of notas){
//         soma += nota;
//     }

//     media = soma / 5 ;

//     return media;
// }

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

function exerc3(){

    let numeros =  [222,212,234,566,77,611,12];
    let maiorNumero = numeros[0];

    for(let numero of numeros){

        if(numero > maiorNumero){
            maiorNumero = numero;
        }

        //console.log(maiorNumero);
    }
}
console.log(exerc3());

//ou da seguinte forma:

let numeros1 = [5, 12, 16, 33, 8, 10, 6];
let maiorNumero = numeros1[0];
for (let i = 0; i < numeros1.length; i++) {
    if( numeros1[i] > maiorNumero){
        maiorNumero = numeros1[i];
    }
    
}
console.log(`O maior número do Array é: ${maiorNumero}`);

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

let frutas =["maçã","pera", "banana", "abacaxi"]
for(let fruta of frutas){
   console.log(`${fruta} tem ${fruta.length}`)
}


// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

function exerc5() {
    let numeros = [];
  
    for (let i = 0; i < 5; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }
  console.log(numeros);

    let pares = [];
    for (let num of numeros) {
        if (num % 2 === 0) {
            pares.push(num);
    }
    }
  console.log(pares);

    let somaPares = 0;
    for (let par of pares) {
        somaPares += par;
    }
  
    console.log(somaPares);
  }

console.log(exerc5());

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

function verificarTipoArquivo(nomeArquivo){
    if( nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav") ){
        return true
    } else{
        return false
    }
}
console.log(verificarTipoArquivo("Linkin Park - In The End.mp3"));

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

const extrairDigitosVerificadores = (cpf) => {
    const digitosVerificadores = cpf.slice(-2);
    return digitosVerificadores;
};

console.log(extrairDigitosVerificadores("056.985.990-23"));

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverterString(string) {
    var stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

console.log(inverterString('BATATA'));

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

function inverterArray (arr){
    return arr.reverse();
}

console.log(inverterArray([1, 2, 3]));

//ou da seguinte forma:

const inverteArray = (array) => {
   
    array.reverse();
    console.log("A ordem invertida é: " + array);
    return array;
}
inverteArray([1,2,3,4]);


