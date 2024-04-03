function solution(a, b, c) {
    let result = 0;
    const totalSum = a + b + c;
    const sumOfSquares = a ** 2 + b ** 2 + c ** 2;
    const sumOfCubed = a ** 3 + b ** 3 + c ** 3;

    if(a !== b && b !== c && c !== a) result = totalSum;
    else if(a === b && b === c && c === a) result = totalSum * sumOfSquares * sumOfCubed;
    else if(a === b || b === c || c === a) result = totalSum * sumOfSquares;
    
    return result;
}