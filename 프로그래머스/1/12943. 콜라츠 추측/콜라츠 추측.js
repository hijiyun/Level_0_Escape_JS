function solution(num) {
    let x = num;
    let count = 0;
    
    while(x !== 1) {
        count += 1;
        
        if(count >= 500) return -1;
        
        x = (x % 2 === 0) ? Math.trunc(x / 2) : (3 * x + 1)
    }
    return count;
}

