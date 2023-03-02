// Métodos: ação de um objeto

let pet = {
    //atributos:
    nome: "Piper",
    idade: 5,
    peso: 2.5,
    //métodos:
    dormir() {
        console.log("Estou dormindo. ZzzzzZZZZ");
    },
    comer(comida) {
        console.log(`Estou comendo ${comida}.`);
    },
    brincar() {
        console.log("Quero brincar la fora!");
    },
};

// "." - lita as propriedades e metodos de um obj
pet.dormir();   // invocação da funçãp/metodo
pet.comer("peixe");
pet.comer("uixcasxaxê");
pet.brincar();

console.log(" ------ ");
//Exercicio: crie no objeto pet o metodo "brincar" e coloque umamensagem no console.log.
// --------------------------------------------------------------------------

let pessoa = {
    nome: "João",
    idade: 25,
    nacionalidade: "brasileiro",
    speach() {
        // this => representa o dono do metodo
        console.log(`Oi, eu sou o ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade} !`);
    },
    envelhecer() {
        this.idade++;
    },
    cuidaPet(animal){
        console.log(`Estou cuidando do ${animal.nome} hoje.`);
        animal.comer("repolho");
        animal.peso+= 0.2;
    }
};

pessoa.speach();

// Alterando o nome do obj para "Claudio":
pessoa.nome = "Claudio";
pessoa.speach();

pessoa.envelhecer();    //incremento a idade em +1
pessoa.envelhecer();    //incremento a idade em +1
pessoa.envelhecer();    //incremento a idade em +1
pessoa.speach();

pessoa.cuidaPet(pet);
console.log(pet.peso);


