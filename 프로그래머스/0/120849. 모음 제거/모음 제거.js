function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"]
    return answer = [...my_string].filter(item => !vowel.includes(item)).join('')
}