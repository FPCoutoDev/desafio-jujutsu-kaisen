const magiaJujutsu = {
    INFINITO: {nome: "infinity Void", dano: 999},
    VESSEL: {nome: "Malevont Shrine", dano: 50},
    RIKA: {nome: "Authentic Mutual Love", danoMinimo: 20, danoMaximo:80}
}

class Feiticeiros{
    constructor(nome, idade, magia, vida){
        if (!Object.keys(magiaJujutsu).includes(magia)) {// chat gpt me auxiliou para produzir essa mensagem de erro
        throw new Error(`Escolha apenas entre INFINITO, VESSEL OU RIKA `);}
    this.nome = nome;
    this.idade = idade;
    this.magia = magia;
    this.vida = vida;
    }
}
function ataqueJujutsu(feiticeiro, atacado ){
        const magiaDamage = magiaJujutsu[feiticeiro.magia]
        let damage = magiaDamage.dano

    if(feiticeiro.magia === "RIKA"){
        damage= Math.random() < 0.5 ? magiaDamage.danoMinimo : magiaDamage.danoMaximo;
}
    console.log(`${feiticeiro.nome} atacou ${atacado.nome} com ${magiaDamage.nome}, causando ${damage} de pontos de vida.`)
atacado.vida -= damage
    if(atacado.vida <= 0){
        atacado.vida = 0
        console.log(`${atacado.nome} não resistiu e foi abatido por ${feiticeiro.nome}`)}   
    else {console.log(`${atacado.nome} agora tem ${atacado.vida} de vida restante.`) 
   }
}
let firstCharacter = new Feiticeiros("Satoro Gojo", 27, "INFINITO", 140)
let secondCharacter = new Feiticeiros("Sukuna", 500, 'VESSEL', 150 )
let thirdCharacter = new Feiticeiros("Yuta Okkotsu", 23, "RIKA", 130)

ataqueJujutsu(thirdCharacter, secondCharacter)