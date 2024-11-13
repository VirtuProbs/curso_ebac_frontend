function Animal(nome,idade){
    this.nome = nome
    this.idade = idade

}

function Cachorro(nome, idade, raca){
    Animal.call(this, nome, idade);

    this.raca = raca;
}

function Gato(nome, idade, cor){
    Animal.call(this, nome, idade);

    this.cor = cor;
    this.emitirSom = function(){
        console.log(this.nome + " está miando")
    }
}

const cachorro1 = new Cachorro("Rodolfo", 3,"Vira-lata")
const cachorro2 = new Cachorro("Claudio", 1, "Pastor alemão")
const gato1 = new Gato("Luna", 5, "preto")

console.log(gato1)
gato1.emitirSom();