function solution(n) {
    const arr = Array(n).fill(1).map((_, idx) => idx + 1);
    
    const count = (i) => {
        let num = 0;
        for (let j = 1; j <= i; j++) {
            i % j === 0 ? num += 1 : null;
        }
        return num;
    }
    
    return arr.map((i) => count(i)).filter((i) => i > 2).length;
}