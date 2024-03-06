function solution(array) {
    return [...(array + '')].filter(el => el === '7').length;
}