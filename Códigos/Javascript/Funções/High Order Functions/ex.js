function maior(velocidade,printer){
    console.log("Função Maior");
    let novavelocidade=velocidade*2
    printer(novavelocidade)
    return novavelocidade
}
let imprimir= velocidade=>{
    console.log("Nova velocidade"+velocidade)
}

let novavelocidade=maior(60,imprimir)
console.log(novavelocidade)