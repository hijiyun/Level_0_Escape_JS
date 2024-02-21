function solution(a, b) {
    return answer = Number((a/b).toFixed(10) == a/b) ? 1 : 2;
}

// function solution(a, b) {
//     const answer = b % a !== 0 && (b / a) % 2 === 0 && (b / a) % 5 === 0 ? 1 : (b / a) % 2 === 0 || (b / a) % 5 === 0 ? 1 : b % 2 === 0 ? 1 : b % 5 === 0 ? 1 : 2;
//     return answer;
// }