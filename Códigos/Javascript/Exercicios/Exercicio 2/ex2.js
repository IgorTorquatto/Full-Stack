let nome;
nome=prompt("Digite seu nome:");
let velocidade=0;
velocidade=prompt("Gostaria de que a nave atingisse qual velocidade?(Digite somente o número)");
confirm("A nave irá para "+velocidade+".Correto "+nome+"?");
if(velocidade<=0){
    alert("A nave está parada");
}
else if(velocidade<40){
    alert("Você está bastante devagar");
}
else if(velocidade<=40 && velocidade<80){
    alert("Parece uma boa velocidade");
}
else if(velocidade>=80 && velocidade<100){
    alert("Está em alta velocidade. Considere diminuir");
}
else{
    alert("Velocidade extremamente perigosa!");
}
alert("Nome: "+nome+" Velocidade: "+velocidade+"Km/s");