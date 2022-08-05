//Slice(Extrai os itens do array do começo até o final do índice inserido, porém seguindo a ordem: [begin,end[ ,ou seja, não remove o item final )
let nomes=["João","Poliana","Caique","Sérgio"]

let removidos=nomes.slice(1,3)

console.log(removidos); //Poliana e Caique serão removidos