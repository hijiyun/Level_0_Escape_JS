function solution(n) {
    let number = n;
    const prime_num = [];
    let i = 2;
    
    while (number != 1) {
       if (number % i == 0) {
           prime_num.push(i)
           while (number % i == 0) {
               number = number / i; 
           }
       }
       i++;
    }
    return prime_num;
}