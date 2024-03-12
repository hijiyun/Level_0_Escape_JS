function solution(balls, share) {
    const factorial = (i) => {
        return i ? i * factorial(i - 1) : 1;
    } 
    
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}