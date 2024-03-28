function solution(i, j, k) {
    // 24.03.07 [알고리즘 한숟갈]
    // 24.03.28 [Lv0 탈출]
    const arr = Array((j - i) + 1).fill().map((_, idx) => i + idx);
    const booleanArr = arr.map((el) => [...String(el)].map((v) => v.includes(k))).flat();
    console.log(booleanArr);
    const count = booleanArr.filter((el) => el !== false).length;
    return count;
}