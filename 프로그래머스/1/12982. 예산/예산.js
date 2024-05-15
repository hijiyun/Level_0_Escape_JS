function solution(d, budget) {
    const amountArr = d.slice().sort((a, b) => a - b);
    let balance = budget;
    let count = 0;
    
    for(let i = 0; i < amountArr.length; i++) {
        if(balance - amountArr[i] >= 0) {
            balance = balance - amountArr[i];
            count ++;
        }
    }
    return count;
}