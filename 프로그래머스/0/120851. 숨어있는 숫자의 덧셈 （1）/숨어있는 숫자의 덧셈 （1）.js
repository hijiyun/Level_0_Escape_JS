function solution(my_string) {
    return [...my_string].filter(el => +el).reduce((acc, cur) => Number(acc) + Number(cur))
}