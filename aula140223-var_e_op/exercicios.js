// Exercício 1
// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"
let peso = 77;
let altura = 1.66;
let imc = peso / (altura * altura); //ou altura**2 = altura elevado ao quadrado
console.log(`Meu IMC é ${imc.toFixed(2)}`)

// Exercício 2
// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R
let raio = 6;
const PI = 3.14;
let area = PI * raio * raio;
console.log(`A área do circulo é ${area.toFixed(2)}`)

// Exercício 3
// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R
let circunferencia = 2 * PI * raio;
console.log(`E o valor da circunferencia é ${circunferencia}`);

// Exercício 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32
let temp = 38;
const F = 32;
let convert_temp = temp * 1.8 + F;
console.log(`A temperatura em Fahrenheit agora é de ${convert_temp}ºF, equivalentes a ${temp}ºC.`);
