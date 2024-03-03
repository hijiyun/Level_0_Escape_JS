function solution(score) {
    const average = score.map(num => (num[0] + num[1]) / 2);
    const sort = average.slice().sort((a, b) => b - a);
    return average.map((el, i) => sort.indexOf(el) + 1)
}