function solution(balls, share) {
    let factorial = 1;
    let factorial2 = 1;
    let factorial3 = 1;
    
    // n!
    for(let i = 1; i <= balls; i++) {
        factorial *= i;
    }
    
    // (n-m)!
    for (let i = 1; i <= balls - share; i++) {
        factorial2 *= i;
    }
    
    // m!
    for (let i = 1; i <= share; i++) {
        factorial3 *= i;
    }
    return Math.round(factorial / (factorial2 * factorial3));
}