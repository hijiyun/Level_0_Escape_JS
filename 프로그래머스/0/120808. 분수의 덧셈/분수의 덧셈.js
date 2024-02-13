function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2;
    
    const getGcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
        }
    
    let gcd = getGcd(numer, denom);

    answer[0] = numer / gcd;
    answer[1] = denom / gcd;
    return answer;
}