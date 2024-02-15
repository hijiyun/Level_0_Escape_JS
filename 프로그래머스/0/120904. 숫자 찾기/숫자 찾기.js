function solution(num, k) {
    const arr = num.toString().split('')
    const kStr = k.toString()
    return arr.indexOf(kStr) !== -1 ? arr.indexOf(kStr) + 1 : -1;
}