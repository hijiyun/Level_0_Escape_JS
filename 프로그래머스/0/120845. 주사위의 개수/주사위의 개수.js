function solution(box, n) {
    return box.map(el => Math.trunc(el / n)).reduce((acc, cur) => acc * cur);
}