function solution(money) {
    const cups = Math.floor(money/5500);
    const change = money - (cups * 5500);
    return answer = [cups, change];
}