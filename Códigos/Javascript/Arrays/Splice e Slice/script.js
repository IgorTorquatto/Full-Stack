let nomes=["João","Poliana","Caique","Sérgio"]

//Splice(Escolhe a posição/Escolhe quantos itens serão removidos apartir da posição escolhida/Nomeia os itens a serem adicionados)
nomes.splice(1,2,"Caio","Henrique")

console.log(nomes); //Joao,Caio,Henrique,Sérgio 

//Colocando dentro de uma variável tomamos conhecimento de que a função retorna os itens removidos:
/*  let removidos=nomes.splice(1,2,"Caio","Henrique")
    console.log(removidos);  */