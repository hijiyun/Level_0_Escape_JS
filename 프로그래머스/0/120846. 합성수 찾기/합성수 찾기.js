function solution(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        let num = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                num += 1;
            }
        }
        if(num >= 3) {
            total += 1;
        }
    }
    return total;
}