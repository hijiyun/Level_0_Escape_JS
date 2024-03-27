function solution(n) {
    let count = 0;
    let number = 0
    
    while(count < n) {
        count++;
        number++;
        
        while(number % 3 === 0 || (number+'').includes('3')) {
            number++;
        }
    }
    return number;
}