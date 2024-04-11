function solution(a, b) {
    let num = 0;
    
    if (a > b) [a, b] = [b, a]
    for (let i = a; i <= b; i++) num += i;
    
    return num;
}