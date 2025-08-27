// Classe genérica de um Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Escolhendo o ataque conforme o tipo do herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não tem ataque definido";
        }

        // Mensagem final
        console.log(`O ${this.tipo} atacou e ${ataque}`);
    }
}

// Criando heróis (objetos a partir da classe)
let heroi1 = new Heroi("Arthas", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 150, "mago");
let heroi3 = new Heroi("Lee", 40, "monge");
let heroi4 = new Heroi("Hanzo", 25, "ninja");

// Chamando os ataques
heroi1.atacar(); // O guerreiro atacou e usou espada
heroi2.atacar(); // O mago atacou e usou magia
heroi3.atacar(); // O monge atacou e usou artes marciais
heroi4.atacar(); // O ninja atacou e usou shuriken