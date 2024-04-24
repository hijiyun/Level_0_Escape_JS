function solution(s) {
    const answer = [...s].sort().reverse().join('')
    return answer;
}