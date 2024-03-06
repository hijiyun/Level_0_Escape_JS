function solution(my_string) {
    const arr = Array.from(my_string)
    return arr.filter((i, idx) => arr.indexOf(i) === idx).join('')
}