const classes = {
    FEITICEIRO: "feiticeiro",
    UCHIHAS: "uchiha",
    NINJAS: "ninja"
}

const magiasPermitidas = {
    feiticeiro: ["INFINITO", "VESSEL", "RIKA"],
    uchiha: ["AMATERASU", "KOTOAMATSUKAMI", "SUSANOO"],
    ninja: ["CHIDORI", "RASENGAN", "GENJUTSU"]
}

const habilidades = {
    INFINITO: {nome: "infinity Void", dano: 999},
    VESSEL: {nome: "Malevont Shrine", dano: 50},
    RIKA: {nome: "Authentic Mutual Love", danoMinimo: 20, danoMaximo:160},
    CHIDORI: {nome: "Chidori Kirin", dano: 99},
    RASENGAN: {nome: "Rasen Shuriken", dano: 100},
    GENJUTSU: {nome: "Genjutsu", dano: 100},
    AMATERASU: {nome: "Amaterasu eterno", dano: 99},
    KOTOAMATSUKAMI: {nome: "Kotoamatsukami", danoMinimo: 100, danoMaximo: 999},
    SUSANOO: {nome: "Susanoo Perfeito", dano: 140}

}


class Personagens{
    constructor(classe, nome, magia, vida){
    if (!magiasPermitidas[classe].includes(magia)) {
        throw new Error(`A classe ${classe} não pode usar a magia ${magia}. Escolha entre: ${magiasPermitidas[classe].join(", ")}`);
    }
    this.classe = classe;
    this.nome = nome;
    this.magia = magia;
    this.vida = vida;
    }
}
function ataquePersonagem(atacantes, atacado ){
        const magiaDamage = habilidades[atacantes.magia]
        let damage = magiaDamage.dano

    if(atacantes.magia === "KOTOAMATSUKAMI"){
            damage= Math.random() < 0.75 ? magiaDamage.danoMinimo : magiaDamage.danoMaximo;
        if(damage === magiaDamage.danoMaximo){
            console.log("DANO CRITICO!")}
        }

    if(atacantes.magia === "RIKA"){
            damage= Math.random() < 0.5 ? magiaDamage.danoMinimo : magiaDamage.danoMaximo;
        if(damage === magiaDamage.danoMaximo){
            console.log("DANO CRITICO!")}
        }

    if(atacantes.magia === "GENJUTSU"){
        damage= Math.random() * magiaDamage.dano
        if(damage === magiaDamage.danoMaximo){
            console.log("DANO CRITICO!")}
        }

    console.log(`O ${atacantes.classe} ${atacantes.nome} atacou ${atacado.nome} com ${magiaDamage.nome}, causando ${damage} de pontos de vida.`)
atacado.vida -= damage

if(atacantes.magia === "AMATERASU"){
    console.log(`${atacado.nome} está em chamas!`);
    for(var i = 0; i < 8; i++){
        if( i % 2 === 0){
        atacado.vida -= 15
        if(atacado.vida <= 0){
            atacado.vida = 0
            console.log(`${atacado.nome} não resistiu e foi abatido por ${atacantes.nome}`)}
            else{ console.log(`${atacado.nome} está queimando e perdeu 15 de vida! Vida restante: ${atacado.vida}`)
            }
        }
    }}
    else{ if(atacado.vida <= 0){
        atacado.vida = 0
        console.log(`${atacado.nome} não resistiu e foi abatido por ${atacantes.nome}`)}   
    else {console.log(`${atacado.nome} agora tem ${atacado.vida} de vida restante.`) 
   }
    }
}

let firstCharacter = new Personagens(classes.FEITICEIRO, "Satoro Gojo", "INFINITO", 140)
let secondCharacter = new Personagens(classes.FEITICEIRO, "Sukuna", 'VESSEL', 150 )
let thirdCharacter = new Personagens(classes.FEITICEIRO, "Yuta Okkotsu", "RIKA", 130)
let fourthCharacter = new Personagens(classes.NINJAS, "Kakashi Hatake", "CHIDORI", 100);
let fifthCharacter = new Personagens(classes.NINJAS, "Naruto Uzumaki", "RASENGAN", 110);
let sixthCharacter = new Personagens(classes.NINJAS, "Sakura", "GENJUTSU", 110);
let seventhCharacter = new Personagens(classes.UCHIHAS, "SASUKE", "AMATERASU", 150);
let eighthCharacter = new Personagens(classes.UCHIHAS, "SHISUI", "KOTOAMATSUKAMI", 110);
let ninthCharacter = new Personagens(classes.UCHIHAS, "MADARA", "SUSANOO", 200);
console.log("//////////////////////////////////////////////////////")
ataquePersonagem(seventhCharacter, secondCharacter)
console.log("//////////////////////////////////////////////////////")
ataquePersonagem(eighthCharacter, ninthCharacter)
console.log("//////////////////////////////////////////////////////")
ataquePersonagem(sixthCharacter, ninthCharacter)
console.log("//////////////////////////////////////////////////////")