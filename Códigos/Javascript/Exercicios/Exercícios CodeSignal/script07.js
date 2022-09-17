//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
function solution(statues) {
    let numeros=statues.sort((a,b)=> a-b);
    let i;
    let contador=0;
    if(numeros.length==1){
      return 0;
    }
    
    for(i=0;i<numeros.length;i++){
        if(numeros[i+1]-numeros[i]>1){
          contador=contador +numeros[i+1] -numeros[i]-1
        }
      }
    return contador;
  }
  