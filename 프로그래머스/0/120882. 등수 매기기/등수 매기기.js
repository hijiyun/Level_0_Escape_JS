function solution(score) {
    const scoreTotal = score.map((v) => v[0] + v[1])
    const scoreSorted = scoreTotal.slice().sort((a, b) => b - a);
    return scoreTotal.map((el) => scoreSorted.indexOf(el) + 1);
}