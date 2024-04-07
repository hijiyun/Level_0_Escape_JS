// function solution(a, b) {
//   var answer = 0;
//   if (a > b) {
//     for (let i = 0; i <= a - b; i++) {
//       answer += b + i;
//     }
//   } else if (a == b) {
//     answer = a;
//   } else if (a < b) {
//     for (let j = 0; j <= b - a; j++) {
//       answer += a + j;
//     }
//   }
//   return answer;
// }

function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return ((max - min + 1) * (min + max)) / 2;
}
