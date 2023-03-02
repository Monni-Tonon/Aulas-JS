// Objetos: servem para estruturar dados
// eles tem - propriedades (caracteristicas)
//          - métodos (ações)

// as {} indicam que estou declarando um objeto
// pet = {}; com const podemos aletrar as propriedades

let pet = {
    nome: "Fred",       //propriedade:valor
    idade: 2,           //propriedade:valor
    peso: 3.5,            //propriedade:valor
    especie: "gato",
}; 

let pet2 = {
    nome: "Dorothy",       
    idade: 5,           
    peso: 5.5,            
    especie: "gato",
}; 

// outra forma de declarar o obj:
pet["nome"] = "Cindy";

console.log(pet, pet2);

// Ex: crie um objeto "pet3" com seu pet e coloque uma nova propriedade: comida favorita

let pet3 = {
    nome: "Piper",       
    idade: 13,           
    peso: 5,            
    especie: "gato",
    comidaFavorita: "alface"
}; 

console.log(pet, pet2, pet3);

// Acesso de propriedades
console.log(pet);
console.log(pet.nome);      //para acessar o nome
console.log(pet.idade);     //para acessar a idade
console.log(pet.peso);      //para acessar o peso
console.log(pet.especie);   //para acessar a especie

// Outra forma de acesso a propriedade:
console.log(pet["nome"]);   // equivale a console.log(pet.nome); (linha 34)

// Alterar valores das propriedades
pet.nome = "Mew";
pet.idade++;
pet.peso = pet.peso + 3;
console.log(pet)

//Adicionando nova propriedade no mesmo obj já existente:
pet.cor = "preto";
// ao pedir para imprimir, será listado o ojbjeto com a nova propriedade cor no final da lista.

//Ex2: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

//utilizei o pet3 para alterar:
pet3.raca = "SRD";
pet3.peso = 4.5;

console.log(pet3);