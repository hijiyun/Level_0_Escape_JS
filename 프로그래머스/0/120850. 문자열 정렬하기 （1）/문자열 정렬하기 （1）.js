function solution(my_string) {
    return [...my_string].filter(el => !isNaN(+el)).map(num => +num).sort((a, b) => a - b);
}