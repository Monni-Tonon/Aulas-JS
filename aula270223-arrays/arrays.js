let figuras = ["coracao", "estrela", "ok", "nao", "joinha", "sorriso"];
console.log(figuras); // representacao em texto

let numeros = [3, 4, 5, 7, 2];
console.log(numeros);

//Acessando elementos
console.log(figuras[5]); //acesso o sorriso
console.log(figuras[1]); //acesso a estrela
console.log(numeros[2]); //acesso o 5
console.log(numeros[0]); //acesso o 3

//Alterando valor de um elemento:
numeros[2] = 700; //altera o valor armazenado no INDICE 2
console.log(numeros); // novo array [3, 4, 700, 7, 2]
numeros[2]++; //incrementa o valor no indice 2 em +1
console.log(numeros); // 700 agora é 701

//Percorrer um array
console.log(numeros.length); //acessa o tamanho real do array. diz qts ELEMENTOS existem no array

for(let i = 0; i < numeros.length; i++){ //percorra enqt i for menor q o tamanho do array e conte mais um
    console.log(i);
}

for(let i = 0; i < figuras.length; i++){
    console.log(`o valor do index ${i} é ${figuras[i]}`)
}

//For-of
let nomes = ["jose", "carlos", "maria", "pedro"];
for(let nome of nomes){         //a variavel nome assume um elemento diferente a cada laço
    console.log(nome);
}

// Percorre o array até o final dele
 for (let notaAluno of notas) {
// Para cada nota no array faça isso
    console.log(notaAluno);
}

for (let i = 0; i < notas.length; i++) {
   notas[i]++; // Se for preciso alterar o valor, é necessário o index
}

//inserir
let listaProdutos = [];
console.log(listaProdutos.length);

listaProdutos.push("Smart band"); //adiciona o elemento no final
listaProdutos.push("olo de cenoura");
listaProdutos.push("iphone");
listaProdutos.push("apple band", "megafone", "HD 2TB");

console.log(listaProdutos);     //imprime a lista criada depois do numero 0, que é a qtd inicial da lista
console.log(listaProdutos.length);      //conta os elementos

//remover - diferente do push, nao tem como remover mais de um elemento de vez
console.log(listaProdutos);
listaProdutos.pop(); // remove o ultimo elemento da lista
console.log(listaProdutos);

console.log(listaProdutos.includes("iphone")); // faz a varredura na lista se existe o que estou procurando. ex: iphone.