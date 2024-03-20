function solution(sides) {
    const sidesSort = sides.slice().sort((a, b) => b - a);
    return sidesSort[0] < sidesSort[1] + sidesSort[2] ? 1 : 2;
}