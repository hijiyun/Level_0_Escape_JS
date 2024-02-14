function solution(numer1, denom1, numer2, denom2) {
    const resultNumer = numer1 * denom2 + numer2 * denom1;
    const resultDenom = denom1 * denom2;
    
    // 결과를 기약 분수로 만들기 위해 최대공약수를 구함
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const commonDivisor = gcd(resultNumer, resultDenom);
    
    return [resultNumer / commonDivisor, resultDenom / commonDivisor];
}
