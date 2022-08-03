//Execução Normal, independente de onde esteja a função:
console.log(acelerar(20,30));
console.log(dobrarvelocidade(20,30));

//Função Anônima:
let dobrarvelocidade= function(velocidade){
    return velocidade*2
}
//Dá erro porque ela está sendo chamada antes de ser implementada.

function acelerar(velocidade,aceleracao){
    let novavelocidade=velocidade+aceleracao
    return novavelocidade
}