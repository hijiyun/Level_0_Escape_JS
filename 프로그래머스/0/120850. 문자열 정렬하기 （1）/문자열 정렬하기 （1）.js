function solution(my_string) {
    const regex = /[^0-9]/g;
    const numArr = String([my_string.replaceAll(regex, '')]);
    return [...numArr].map((val) => val * 1).sort((a, b) => a - b)
}