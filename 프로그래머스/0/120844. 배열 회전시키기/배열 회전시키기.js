function solution(numbers, direction) {
    if(direction === 'right') {
        const LAST_EL = numbers.pop();
        numbers.unshift(LAST_EL)
    } else if(direction === 'left') {
        const FIRST_EL = numbers.shift();
        numbers.push(FIRST_EL)
    }
    return numbers;
}