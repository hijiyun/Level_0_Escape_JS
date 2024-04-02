function solution(i, j, k) {
    const arr = Array(j - i + 1).fill(i).map((v, i) => v + i)
    return arr.map(i => String(i).split('')).flat().filter(i => i === String(k)).length
}