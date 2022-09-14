//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function solution(inputArray) {
    let produto=-10000;
    let i;
    for(i=0;i<inputArray.length;i++){
        let resultado=inputArray[i]*inputArray[i+1]
        if(resultado > produto){
            produto=resultado
        }
    }
    return produto
   }
   