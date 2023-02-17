
// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.
let idade = 30;
let valor = 30.00;

if(idade >= 18 && valor > 20.00){
    var compraBebida = valor - 20.00;
    //ou valor = valor - 20.00; <sem criar uma nova variavel>
    console.log(`Voce está autorizado a comprar a bebida e vc tem agora ${compraBebida} reais`)
} else{
    console.log(`Voce nao tem dinheiro suficiente.`)
}



console.log( )
// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let salario = 4000;

if(salario < 500){
    var novoSalario = salario + 50.00;
    //ou salario = salario + 50.00;
    console.log(`Seu novo salario é de ${novoSalario} reais.`)
} else if(salario >= 500 && salario <= 1000){
    var novoSalario = salario + 25.00;
    //ou salario = salario + 25.00;
    console.log(`Seu novo salario é de ${novoSalario} reais.`)
} else(
    console.log(`Nao houve reajuste.`)
)

console.log( )

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let numero = 4
switch(numero){
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");    
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Não foi reconhecido como dia da semana.");
}

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = "pizza";

if(comida === "batata" || comida === "carne" || comida === "chocolate"){
    console.log("Humm, adoro");
} else if(comida === "pizza" || comida === "sanduiche"){
    console.log("As vezes! :/");
} else{
    console.log("Quero nada não. :'( ");
}

// uma outra forma de resolver com SWITCH, seria AGRUPANDO OS CASES

let food = "carne";

switch (food) {
    case "batata":
    case "chocolate":
    case "carne":
        console.log("Hum, adoro!");
        break;
    case "pizza":
    case "sanduiche":
        console.log("As vezes...");
        break;
    default:
        console.log("Quero nao.. :/")
}

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let number = 6;
    if(number % 2 == 0){
        console.log(`o numero ${number} é par.`)
    } else{
        console.log(`o numero ${number} nao é par.`)
}