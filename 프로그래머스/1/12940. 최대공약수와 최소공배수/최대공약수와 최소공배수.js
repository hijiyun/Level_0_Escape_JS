function solution(n, m) {
    const gcd = (num1, num2) => num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
    const lcm = (num1, num2) => num1 * num2 / gcd(num1, num2);
    return [gcd(n, m), lcm(n, m)];
}