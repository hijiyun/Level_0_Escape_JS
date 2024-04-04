function solution(n) {
    // 24.02.16 [알고리즘 티스푼]
    // 24.04.04 [Lv0 탈출]
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