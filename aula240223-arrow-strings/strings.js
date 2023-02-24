// Strings = cadeia de caracteres

let meuPet = "Fred"; // "", '', ``
// F(0), r(1), e(2), d(3)
// console.log(meuPet);

// console.log(meuPet[0]); // Acessando o caractere "F"
// console.log(meuPet[1]); // Acessando o caractere "r"
// console.log(meuPet[2]); // Acessando o caractere "e"
// console.log(meuPet[3]); // Acessando o caractere "d"
// console.log(meuPet[500]); // Não existe caractere nesse índice

// console.log(meuPet.length); // Retorna o tamanho da string

// Percorrendo string da posição 0 até length - 1
// Posição final da string é length-1
// for (let i = 0; i < meuPet.length; i++) {
//   console.log(meuPet[i]);
// }

// console.log(meuPet[meuPet.length - 1]); // acessa o ultimo caractere

// console.log(meuPet.toLowerCase()); // Retorna tudo minusculo
// console.log(meuPet.toUpperCase()); // Retorna tudo maiusculo

let arquivo = "batata.mp4";
// Verifica se a string termina com a palavra
// console.log(arquivo.endsWith(".mp4"));
// Verifica se a string inicia com palavra
// console.log(arquivo.startsWith("bat"));

let frase = "Eu comi arroz, batata e carne.";
// Buscar se uma frase inclui um trecho
console.log(frase.includes("feijão"));
// Buscar posição do caractere. encontra o primeiro que aparecer somente.
console.log(frase.indexOf("c"));
console.log(frase.indexOf("x")); // caso nao encotre o caracter, o retorno é -1
console.log(frase.indexOf("arroz")); // passando um trecho ou palavra, retorna o index de onde inicia a palavra ou trecho
//Buscar posição da direita para a esquerda
console.log(frase.lastIndexOf("c"));

console.log(frase.replace("carne", "ovo"));

let palavra2 = "BATATA";
console.log(palavra2.slice(1)); // cortou da posicao indicada ate o final
console.log(palavra2.slice(1, 4)); // Cortar a primeira letra fora e a 4 letra em diante. Retorna "ATA". o primeor numero ele inclui na impressao e o ultimo numero é o indice q exclui.
//                        B | A T A | T A
//                        0 | 1 2 3 | 4 5