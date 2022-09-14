/*Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc */
function solution(year) {
    let inteiro=(year/100)
    let verificacao=Number.isInteger(inteiro)
    if(verificacao == true){
        return year/100
    }
    else{
       let seculo2=(year/100)+1
       return Math.trunc(seculo2)
    }
}
