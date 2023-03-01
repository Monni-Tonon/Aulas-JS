// Crie um array de palavras, para cada palavra verifique se o amanho é menor que 5, 
//se for, transforme em BATATA; caso contrário retorne a palavra original em caixa alta.

let palavras = ["colírio", "alto", "pessoa", "medo", "lado"];

let palavrasTrocadas = palavras.map((palavra) =>{
if(palavra.length < 5){
    return "BATATA";
} else{
    return palavra.toUpperCase();
}}) ;

console.log(palavrasTrocadas);