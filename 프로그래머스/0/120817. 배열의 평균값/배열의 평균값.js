function solution(numbers) {
    let add = numbers.reduce((a, c) => (a + c), 0)
    
    return add / (numbers.length);
}
