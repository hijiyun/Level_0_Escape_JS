function solution(my_string) {
    return [...my_string].filter((i) => Number(i)).reduce((acc, cur) => acc + Number(cur), 0);
}