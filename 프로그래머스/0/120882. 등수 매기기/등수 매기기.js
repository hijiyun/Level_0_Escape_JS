function solution(score) {
    const average = score.map((i) => (i[0] + i[1])/2);
    const arr = average.slice().sort((a, b) => b - a);
    return average.map(score => arr.indexOf(score) + 1);
}