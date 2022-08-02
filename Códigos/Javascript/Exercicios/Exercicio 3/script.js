let nome;
nome=prompt("Digite o nome da nave: ")
let contador=0
let dobra=""
dobra=prompt("Deseja entrar em uma dobra espacial?\n1-Sim\n2-Não")
while(dobra!=2){
    contador++
    dobra=prompt("Deseja realizar a próxima dobra espacial?\n1-Sim\n2-Não")
}
alert("O número de dobras espaciais da nave "+nome+" foi de "+contador);
