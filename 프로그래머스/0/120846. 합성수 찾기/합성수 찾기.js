function solution(n) {
    let compositeNumber = [];
    
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            count = (i % j === 0) ? count += 1 : count;
        }
        if (count >= 3) compositeNumber.push(i)
    }
    return compositeNumber.length;
}