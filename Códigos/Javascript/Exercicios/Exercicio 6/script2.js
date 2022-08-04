let escolha;
let velocidade=0;

function mostrarmenu(){
    let opcao
    opcao=prompt("Digite a sua intenção:\n 1.Acelerar\n 2.Desacelerar\n 3.Imprimir\n 4.Sair")
    return opcao
}
function acelerar(velocidade){
    let novavelocidade=velocidade+5
    return novavelocidade
}
function desacelerar(velocidade){
    let novavelocidade=velocidade-5
    return novavelocidade
}
function imprimir(velocidade){
    alert(velocidade+" Km/s")
}
do{
    escolha=mostrarmenu()
    switch(escolha){
        case "1":
            velocidade=acelerar(velocidade)
            break
        case "2":
            velocidade=desacelerar(velocidade)
            break
        case "3":
            imprimir(velocidade)
            break
    }
}while(escolha!=4)