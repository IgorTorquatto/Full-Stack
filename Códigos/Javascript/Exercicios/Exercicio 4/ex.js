 let nome=prompt("Digite um nome")
 let antigocaractere=prompt("Qual caractere você deseja substituir?")
 let novocaractere=prompt("Por qual caractere você deseja substituir?")
 let novonome="";
 let i;
 for(i=0;i<nome.length;i++){
    if(nome[i]==antigocaractere){
        novonome=novonome +novocaractere
    }
    else{
        novonome=novonome+nome[i]
    }
 }

 alert("Nome com as modificações: "+novonome)
