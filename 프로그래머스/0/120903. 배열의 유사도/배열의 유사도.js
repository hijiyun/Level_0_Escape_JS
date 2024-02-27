function solution(s1, s2) {
    return answer = s1.filter(item => s2.includes(item)).length;
}