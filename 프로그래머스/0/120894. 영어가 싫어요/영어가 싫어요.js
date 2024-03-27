function solution(numbers) {
    let number = numbers;
    const numberStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i <= 9; i++) {
        number = number.replaceAll(numberStr[i], i);
    }
    
    return +number
}