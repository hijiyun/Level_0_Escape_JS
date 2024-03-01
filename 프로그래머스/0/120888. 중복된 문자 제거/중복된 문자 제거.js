function solution(my_string) {
    return [...my_string].filter((el, i) => i === my_string.indexOf(el)).join('')
}