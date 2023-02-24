//Arrow = flecha
//Arrow function = sintaxe curta

function ola(){
    console.log("Hello!");
}
ola();

//Esta function escrita como arrow function:
const ola1 = () => {             //first-class citzen = funcoes sao tratadas como valor, pois estou guardando ela dentro de uma variavel (const)
    console.log("Hello");
}
ola1();


function soma(a, b){
    console.log(`A soma é ${a + b}`);
    return a + b;
}

// Sintaxe da ARROW FUNCTION
const soma1 = (a, b) => {
    console.log(`A soma é ${a + b}`);
    return a + b;
}
let resultado = soma1(1, 2);


console.log("--------------EXERCICIO-------------------------")
// Transformar as funções do arquivo de exercicios de FUNCTION para ARROW FUNCTION:

//funcao 1:
function fullName(nome, sobrenome) {
    return nome + " " + sobrenome;
}

//Arrow function:  (fullName1 pois conflitou com a funcao anterior o mesmo nome)
const fullName1 = (nome, sobrenome) => {
    return nome + " " + sobrenome;
}

//fazendo a arrow em uma linha:
const fullName2 = (nome, sobrenome) => nome + " " + sobrenome;
console.log(fullName2(Monni, Tonon));


// ========================================================================
//funcao 2:
function contar(maximo) {
    for (let i = 1; i <= maximo; i++) {
    console.log(i);
    }
}

//Arrow function:   
const contar = (maximo) => {
    for (let i = 1; i <= maximo; i++) {
    console.log(i);
    }
}


// ========================================================================

//função 3:
function imc(peso, altura) {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);

    return calculo;
}

//Arrow function: 
const imc =(peso, altura) => {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);
    return calculo;}