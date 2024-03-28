function solution(n) {
    // 24.02.19 [알고리즘 티스푼]
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

// 1부터 n까지 반복문을 돌린다.
// 1부터 약수를 구한다.
// 구한 약수의 개수가 3개이상이면 CompositeNumber에 반영한다.