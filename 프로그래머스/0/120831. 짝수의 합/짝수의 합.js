function solution(n) {
    return (n <= 1) ? 0 : Array(Math.floor((n / 2) + 1)).fill().map((v , i) => i * 2).reduce((pre, cur) => pre + cur);
}