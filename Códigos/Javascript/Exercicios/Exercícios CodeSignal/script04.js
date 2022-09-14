//Given the string, check if it is a palindrome.
function solution(inputString) {
    let separar=inputString.split("")
    let invertido=separar.reverse("")
    let final=invertido.join("")
    if(final == inputString){
        return true
    }
    else{
        return false
    }
}