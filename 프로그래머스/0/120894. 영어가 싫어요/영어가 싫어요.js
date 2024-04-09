function solution(numbers) {
    const changeNumbers = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ]
    for(let i = 0; i <= 9; i++) {
        numbers = numbers.replaceAll(changeNumbers[i], i);
    }
    
    return +numbers
}