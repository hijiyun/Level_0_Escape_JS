// function solution(n, k) {
//     let num = k - Math.floor(n / 10);
//     return (12000 * n) + (2000 * num);
// }

function solution (n, k) {
    const sum = (12000 * n) + (2000 * k);
    const discount = 2000 * (Math.floor(n / 10));
    
    return sum - discount;
}