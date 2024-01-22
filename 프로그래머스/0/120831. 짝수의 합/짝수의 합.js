function solution(n) {
    let answer = 0;
    if (n%2===0) {
        for (let i = 0; i<=n; i=i+2) {
            answer = answer + i;
        }} else {
            for (let i = 0; i<=n-1; i=i+2) {
                answer = answer + i;
            }
        }
     return answer;
    }
   