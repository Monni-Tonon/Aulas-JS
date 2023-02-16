// Estruturas condicionais (IF - ELSE)

/*
    if(condicao) {
        //faz algo se a condicao for VERDADEIRA
    }
    */

let idade = 15;

if(idade >= 18){
    console.log(`Sua idade é ${idade}. Voce é maior de idade.`)
                } 
    else{
    console.log(`Sua idade é ${idade}. Voce NÃO é maior de idade.`)
        }

let numero = 0;

if(numero > 0) {
    console.log(`O numero é positivo!`)
} else if (numero < 0) {
    console.log(`O numero é negativo`)
} else { // se nenuma das condições acima for verdadeira
    console.log(`O número é zero`)
}