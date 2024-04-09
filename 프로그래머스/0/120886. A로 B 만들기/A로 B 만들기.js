function solution(before, after) {
    return answer = before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
}