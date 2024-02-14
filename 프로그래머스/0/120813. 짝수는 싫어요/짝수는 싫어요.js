function solution(n) {
    return Array(Math.round(n / 2)).fill().map((v, i) => i * 2 + 1)
}