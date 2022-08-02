let nome="arara"
let novonome=""
let i=0;

for(i=0;i<nome.length;i++){
    if(nome[i]=="a"){
        novonome=novonome+"e"
    }else{
        novonome=novonome+nome[i]
    }
}
console.log(novonome);