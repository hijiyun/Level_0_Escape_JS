function solution(n, k) {
    const lambSkewer = 12000;
    const drink = 2000;
    const sum = (n * lambSkewer) + ((k * drink) - (Math.trunc(n / 10) * drink))
    return sum;
}