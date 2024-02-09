function solution(numer1, denom1, numer2, denom2) {
    const numerSum = (numer1 * denom2) + (numer2 * denom1);
    const denomSum = denom1 * denom2;
    let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    const GCD = getGCD(numerSum, denomSum);
    return [(numerSum / GCD), (denomSum / GCD)];
}