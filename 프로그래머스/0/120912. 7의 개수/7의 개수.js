function solution(array) {
    const arr = array.map((i) => String(i).split('')).flat()
    return arr.reduce((acc, cur) => cur === '7' ? acc + 1 : acc, 0)
}
