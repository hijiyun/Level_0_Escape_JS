function solution(n) {
    return answer = Number([...(n+'')].sort((a, b) => (b - a)).join(''));
}