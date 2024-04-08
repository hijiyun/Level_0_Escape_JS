function solution(my_string) {
    return [...my_string].map((i) => Number(i)).filter((i) => !isNaN(i)).sort((a, b) => a - b)
}