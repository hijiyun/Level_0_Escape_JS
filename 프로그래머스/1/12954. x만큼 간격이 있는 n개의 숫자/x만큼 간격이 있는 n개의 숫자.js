function solution(x, n) {
    // 24.02.15 [Lv0 탈출]
    return Array(n).fill().map((v, i) => (i + 1) * x);
}