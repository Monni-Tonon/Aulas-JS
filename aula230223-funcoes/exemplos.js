// Tópico: Funções

// Função = procedimento = método

// Função ENTRADA(parâmetro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x) , onde:
// f = função
// x = parâmetro
// y = resultado/retorno

//Sintaxe básica                
 function nome_da_funcao(parametro1, parametro2, ...) {     |
     corpo_da_funcao                                        | //declaracao da funcao
}                                                           |


//Exemplo 1:
//declarando a função
function dizOla() {    
    console.log("Hello people!");
    console.log("Bora tomar uma!");
    
} 

//Invocando (chamando) a função:
dizOla();

//Exemplo 2
function exemplo01(){
    let a = 1;
    let b = 4;
    console.log(`A soma é ${a + b}`);
}

exemplo01();

//Exemplo 3:
let num1 = 3;
let num2 = 45;

function exemplo03(){
    console.log(`A soma é igual ${num1 + num2}`)
}

exemplo03();

// Parâmetros = entrada = o que a funcao precisa para executar
// = Informacao dinâmica
// a e b sao PARâMETROS
// Exemplo:
function soma(a, b){
    console.log(`A soma de ${a} + ${b} = ${a + b}`);
}

// Chamando a funcao, alterando os valores dos parametros:
soma(20, 45);
soma(14,5);
soma(4, 7);

// Exemplo 4
function calculadora(a, b, c){
    console.log(`A soma é ${a + b + c}`);
    console.log(`A subtração é ${a - b - c}`);
    console.log(`A divisão é ${a / b / c}`);
    console.log(`A multiplicação é ${a * b * c}`);
}

// Chamando essa função seria:
calculadora(10, 5, 2);

