// function solution(num, k) {
//     const arr = Array.from(String(num), (i) => Number(i))
//     if(arr.includes(k)) {
//         return arr.indexOf(k) + 1;
//     } else {
//         return -1;
//     }
// }

function solution(num, k) {
    return('A' + num).indexOf(k);
}