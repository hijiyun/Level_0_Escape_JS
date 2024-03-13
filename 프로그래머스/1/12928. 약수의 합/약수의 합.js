function solution(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        n % i === 0 && (total+=i)
    }
    return total;
}