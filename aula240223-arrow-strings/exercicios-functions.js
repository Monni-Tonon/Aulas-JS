// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.
//calculadora(2, 3, "*") -> 2 * 3 = 6
//calculadora(2, 3, "-") -> 2 - 3 = -1

function calc(n1, n2, operador){
    if(operador ==="+"){
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
    } else if(operador === "-"){
        console.log(`${n1} - ${n2} = ${n1 - n2}`);
    } else if(operador === "*"){
        console.log(`${n1} * ${n2} = ${n1 * n2}`);
    } else if(operador === "/"){
        console.log(`${n1} / ${n2} = ${n1 / n2}`);
    } else {
        console.log("Operação nao reconhecida");
    }
}

calc(10, 5 ,"-")

//Fazendo utilizando switch:
function calculadora(num1, num2, operador){
    switch(operador){
        case "+": console.log(`${num1 + num2}`);
            break;
        case "-": console.log(`${num1 - num2}`);
            break;
        case "*": console.log(`${num1 * num2}`);
            break;
        case "/": console.log(`${num1 / num2}`);
            break;
        default: console.log("operador não definido");
    }
}
calculadora(2, 2, "*");

// Exercício II: Crie uma função que converte  fahrenheit em celsius
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"

function toCelsius(tempF){
    let tempC = (tempF - 32)/ 1.8;
    return tempC.toFixed(2);
}
console.log(toCelsius(91));

let tempLocal = toCelsius(91);

function checkTemp(temp){
    if(temp < 11){
    console.log(`Muito frio!`);
 } else if(temp >= 11 && temp < 16){
    console.log(`Clima bom!`);
 } else if(temp >= 16 && temp < 31){
    console.log(`Agradavel!`);
 } else {
    console.log(`Hell!`);
 }
}

checkTemp(tempLocal);

