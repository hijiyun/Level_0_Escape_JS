function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    return [...my_string].filter((i) => !vowel.includes(i)).join('')
}