// function solution(array, n) {
//     arr = array.filter((i) => i === n);
//     return arr.length;
// }

// function solution(array, n) {
//     for(var i = 0; i < array.length; i++){
//         if(array[i] == n){
//             count++
//         }
//     }
//     return count;
// }

function solution (array, n) {
    let count = 0;
    array.reduce((acc, cur) => (cur === n ? count++ : null), 0);
    return count;
}