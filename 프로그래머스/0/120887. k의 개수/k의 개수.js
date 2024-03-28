function solution(i, j, k) {
    const arr = Array((j - i) + 1).fill().map((_, idx) => i + idx);
    const booleanArr = arr.map((el) => [...String(el)].map((v) => v.includes(k))).flat();
    console.log(booleanArr);
    const count = booleanArr.filter((el) => el !== false).length;
    return count;
}