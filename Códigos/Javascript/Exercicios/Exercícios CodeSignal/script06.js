//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
function solution(n) {
    if(n == 1 ) return 1;
    if(n < 1 || n > 10**4) return false;
    let conta = (n**2 + (n-1)**2)
    return conta
}