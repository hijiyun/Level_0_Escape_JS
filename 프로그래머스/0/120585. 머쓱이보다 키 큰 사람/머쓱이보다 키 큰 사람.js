// function solution(array, height) {
//     let arr = []
//     for(i = 0; i < array.length; i++) {
//         if(array[i] > height) {
//             arr.push(array[i]);
//         };
//     };
//     return arr.length;
// }

function solution (array, height) {
    arr = array.filter(i => i > height);
    return arr.length;
}