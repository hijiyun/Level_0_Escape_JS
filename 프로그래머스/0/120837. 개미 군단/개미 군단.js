function solution(hp) {
    // 24.02.14 [Lv0 탈출]
    let rhp = hp;
    const ANT_HP = [5, 3, 1];
    return ANT_HP.map((el) => {
       let count = 0;
       count += Math.trunc(rhp / el);
       rhp = rhp % el;
       return count;
    }).reduce((acc, cur) => acc + cur)
}