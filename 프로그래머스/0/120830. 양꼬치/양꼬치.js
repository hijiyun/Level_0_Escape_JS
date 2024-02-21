function solution(n, k) {
    let answer = 0;
    if (n>=10&&k>=(n/10)) {
        answer = 12000*n + 2000*(k-Math.trunc(n/10))
    } else if (n>=10&&k<(n/10)) {
        answer = 12000*n
    } else {
        answer = 12000*n + 2000*k
    }
    return answer
}