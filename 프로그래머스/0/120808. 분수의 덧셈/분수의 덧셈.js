function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    const sumNumer = numer1*denom2 + numer2*denom1;
    const sumDenom = denom1*denom2;
    const getGCD = (num1, num2) => num2 ? getGCD(num2, num1%num2 ) : num1;
    const GCD = getGCD(sumNumer, sumDenom);
    const numer = sumNumer / GCD;
    const denom = sumDenom / GCD;
    return answer = [numer, denom];
}