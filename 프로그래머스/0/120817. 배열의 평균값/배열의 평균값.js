function solution(numbers) {
    let total = numbers.reduce((arr, cur) => arr + cur) / numbers.length;
    return total;
}