function solution(a, b) {
    //그냥 소수점자릿수가 10까지 가면 유한소수로 판별
    //return (a / b).toFixed(10) == (a / b) ? 1 : 2;
    
    //수학적 풀이
    let denom = b;
    
    while (denom % 2 === 0) denom /= 2;
    while (denom % 5 === 0) denom /= 5;
    
    return (a % denom === 0) ? 1 : 2;
}