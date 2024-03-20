function solution(numbers, direction) {
    if (direction === 'right') {
        const END = numbers.pop();
        numbers.unshift(END);
        return numbers;
    } else if (direction === 'left') {
        const FIRST = numbers.shift();
        numbers.push(FIRST);
        return numbers;
    }
}