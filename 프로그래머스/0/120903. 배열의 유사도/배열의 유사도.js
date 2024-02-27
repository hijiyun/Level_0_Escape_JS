function solution(s1, s2) {
    let answer = 0;
    for (let x of s1) {
        for (let y of s2) {
            if (x === y) {
                answer++;
            }
        }
    }
    return answer;
}

/*
function solution(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                count++;
            }
        }
    } return count;
}
*/