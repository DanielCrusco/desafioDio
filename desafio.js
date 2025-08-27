console.log ("Por favor, escolha seu nome:");
let heroName = "Hoheinheim";
console.log ("Bem vindo, " + heroName + "! Sua aventura começa agora.");

let level = 11000
if (level < 1000) {
    console.log ("Você é um guerreiro de nível Ferro.");
} else if (level >= 1000 && level <= 2000) {
    console.log ("Você é um guerreiro de nível Bronze.");
} else if (level >= 2001 && level <= 5000) {
    console.log ("Você é um guerreiro de nível Prata.");
} else if (level >= 5001 && level <= 7000) {
    console.log ("Você é um guerreiro de nível Ouro.");
} else if (level >= 7001 && level <= 8000) {
    console.log ("Você é um guerreiro de nível Platina.");
} else if (level >= 8001 && level <= 9000) {
    console.log ("Você é um guerreiro de nível Ascendente.");
} else if (level >= 9001 && level <= 10000) {
    console.log ("Você é um guerreiro de nível Imortal.");
} else if (level > 10000) {
    console.log ("Você é um guerreiro de nível Radiante.");
} else {
    console.log ("Você não possui um nível de guerreiro.");
}

 console.log ("Bem vindo ao campo de batalha, " + heroName + "! Seu nível atual é " + level + ".")