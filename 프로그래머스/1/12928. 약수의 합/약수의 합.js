function solution(n) {
    return Array(n).fill().map((v, i) => v = i + 1).filter((el) => n % el === 0).reduce((acc, cur) => acc + cur, 0);
}