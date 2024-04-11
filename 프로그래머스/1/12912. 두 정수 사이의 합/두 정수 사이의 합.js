function solution(a, b) {
    if (a === b) return a;
    
    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);
    
    const arr = Array((maxNum - minNum) + 1).fill('').map((_, idx) => idx + minNum);
    return arr.reduce((acc, cur) => acc + cur, 0)
}