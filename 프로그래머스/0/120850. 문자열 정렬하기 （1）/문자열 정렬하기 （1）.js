function solution(my_string) {
    const answer = [...my_string].map(item => Number(item))
    return answer.filter(item => 0 <= item && 9 >= item ).sort((a, b) => a - b)
}
