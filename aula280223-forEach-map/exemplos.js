let numeros = [1, 2, 3];

function mostrarValor(valor){
    console.log(valor);
}

//mostrar os valores do array utilizando FOR de diferentes maneiras:
for(let num of numeros){
    mostrarValor(num);
}

//ou

for(let i = 0; i < numeros.length; i++){
    mostrarValor(numeros[i]);
}

//usando o forEach
// - para cada elemnto no array, executa a função
numeros.forEach(mostrarValor);

//usando arrow-function
numeros.forEach((numero) => {
    console.log(numero);
});

//- -----------------------------------------------------
// Colocar os nomes do array em caixa alta
let nomes = ["Pedro", "Maria", "João", "Lucas"];
let nomesCaixaAlta = [];

for(let nome of nomes){
    nomesCaixaAlta.push(nome.toUpperCase());
};

//usando forEach
nomes.forEach((nome) => {
    nomesCaixaAlta.push(nome.toUpperCase());
});

//usando o map = o map aplica transformação para cada elemento retornado
let nomesCaixaAlta2 = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesCaixaAlta);
console.log(nomesCaixaAlta2);

let nomesCaixaBaixa = nomes.map((nome) =>{
    return nome.toLowerCase();
});

let nomesExclamacao = nomes.map((nome) =>{
    return nome + "!";
});

console.log(nomesExclamacao);

//---------------------------------------------------
//multiplicar os numeros por 100:
let dados = [1,2,3,4,5];
let dadosPor100 = dados.map((dado) =>{
    return dado * 100;
});
console.log(dadosPor100);

//Filter = aplica um teste em cada elemento e quem passar
// faz parte do novo array
// Ex: filtrar as temperaturas positivas das negativas
let temps = [29,5,10,-4,15,-9]; // Celsius

let tempsPositivas = temps.filter((temp) => {
    if (temp > 0){
        return true;
    } else{
        return false;
    }
});

console.log(tempsPositivas);

//OU a forma reduzida de realizar a expressao acima
let tempsPositivas1 = temps.filter((temp) => temp > 0); //formato mais visto

console.log(tempsPositivas1);

// Resumo geral
// forEach = apenas percorre um por um
// filter = testa um por um e gera um novo array
// map = percorre um por um e transforma o elemento