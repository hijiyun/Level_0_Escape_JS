function solution(array) {
    const max_number = Math.max(...array);
    return [max_number, array.indexOf(max_number)];
}