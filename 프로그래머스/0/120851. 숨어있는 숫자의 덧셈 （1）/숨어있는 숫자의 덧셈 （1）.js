function solution(my_string) {
    return [...my_string].filter((val) => val * 1 >= 1).reduce((acc, cur) => +acc + +cur)
}