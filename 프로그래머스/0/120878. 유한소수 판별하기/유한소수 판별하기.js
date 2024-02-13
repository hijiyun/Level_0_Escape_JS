function solution(a, b) {
    //그냥 소수점자릿수가 10까지 가면 유한소수로 판별
    //return (a / b).toFixed(10) == (a / b) ? 1 : 2;
    
    //수학적 풀이
    let denom = b;
    
    while (denom % 2 === 0) denom /= 2;
    while (denom % 5 === 0) denom /= 5;
    
    return (a % denom === 0) ? 1 : 2;
    
    
    //수학적 풀이 - 최대공약수를 구해서 b를 기약분수로 변경 후, 분모의 소인수 확인
    //let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    //const GCD = getGCD(a, b);
    //const numer = a / GCD;
    //let denom = b / GCD;
    //let decimal = [];
    //let i = 2;
    //
    //while (denom != 1) {
    //    if (denom % i == 0) {
    //        decimal.push(i)
    //        while (denom % i == 0) {
    //            denom = denom / i; 
    //        }
    //    }
    //    i++;
    //}
    //console.log(`decimal : ${decimal}`)
    //console.log(`includes2 : ${decimal.includes(2)}`)
    //console.log(`includes3 : ${decimal.includes(3)}`)
    //console.log(`includes5 : ${decimal.includes(5)}`)
    //if (denom != 1) return 2;
    //return (a === 1) ? 2 : (decimal.includes(2) || decimal.includes(5)) ? 1 : 2;
}