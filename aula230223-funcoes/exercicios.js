// Declare uma função que recebe 3 notas e mostra a média entre elas.

function media( nota1, nota2, nota3){
    let resultado = ((nota1 + nota2 + nota3)/3).toFixed(2);
    console.log(`Média: ${resultado}`)
}

media(10, 5, 6);
media(7, 6, 8);

// Utilizando o return para atribuir variaveis a esse resultado:

function media( nota1, nota2, nota3){
    let resultado = ((nota1 + nota2 + nota3)/3).toFixed(2);
    
    return resultado; //indica que o resultado será "externalizado", podendo distribuir em varias variaveis.
}

let medBio = media(10, 5, 6);
let medMat = media(7, 6, 8);
let medPor = media(7, 10, 1);

console.log(`Média Biologia: ${medBio}`)
console.log(`Média Matematica: ${medMat}`)
console.log(`Média Portugues: ${medPor}`)

// Verificar se aluno está aprovado ou nao:

function estaAprovado(nota1, nota2, nota3){
    let situacao = media(nota1, nota2, nota3);
    
    if(situacao >= 7){
        console.log(`Aprovado`);
        return true; // Podemos retornar Aprovado
    } else{
        console.log(`Reprovado`);
        return false; // podemos retornar Reprovado
    }
}
let statusAluno = estaAprovado(6.6, 4, 7.5);
console.log(statusAluno);

console.log(`-------------------------`);
// Exercício I: Crie uma função para calcular o IMC, de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).
console.log(`Calculo do IMC`);

function imc (peso, altura){
    let result = peso / (altura * altura);
    console.log(`O IMC é: ${result}`);
}
imc(78, 1.66);

console.log(`-------------------------`);
// // Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%
function percentual(num){
    let percent = num * 100;
    return `${percent.toFixed(1)}%`;
}
let valorFormat = percentual(0.4);
console.log(valorFormat);

console.log(`-------------------------`);
// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function verificaNum(x){
    if(x < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaNum(-10));

// ou ralizando a função em apenas 2 linhas:
function verificaNum(x){
    return x < 0;
}

console.log(verificaNum(-10));

console.log(`-------------------------`);
// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

const y = 123456.789;
function converte(y){
    const convert = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(y);
return convert;
}

console.log(converte(42511));
console.log(converte(5687979));

//ou usando toLocaleString:
function dinheiro(n3) {
    return n3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
var val3 = dinheiro(100)
console.log(val3);

console.log(`-------------------------`);
// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

function contador(n){
    for (let i = 0; i <= n; i++){;
    console.log(i);
    }
}
contador(10);

console.log(`-------------------------`);
// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

function nome( nome, sobrenome){
    return nome + " " + sobrenome; 
}
console.log(nome("Maria", "do Socorro"));

console.log(`-------------------------`);
// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

//const PI = 3.14;
function areaCirculo(r){
    return Math.PI * r * r;
}
    console.log(areaCirculo(2));

// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivelArea(a){
    if(a >= 1 && a <= 20){
        return `Nível I`;
    } else if(a >= 21 && a <= 40){
        return `Nivel II`;
    } else{
        return `Nível Invalido!`
    }
}
    console.log(nivelArea(areaCirculo(3)));