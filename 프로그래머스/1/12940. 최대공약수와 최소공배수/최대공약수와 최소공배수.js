function solution(n, m) {
    function gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    const GCD = gcd(n, m);
    const LCM = (n * m) / GCD;
    return [GCD, LCM];
}