function solution(numbers) {
    let asc = numbers.sort((a, b) => a - b);
    return asc[asc.length-1] * asc[asc.length - 2];
}