// 연속된 수는 하나의 숫자로 간주 안 한 코드 ........
// function solution(my_string) {
//   var answer = 0;
//   for (let i = 0; i < my_string.length; i++) {
//     if (!isNaN(Number(my_string[i]))) {
//       answer += Number(my_string[i]);
//     }
//   }
//   return answer;
// }

function solution(my_string) {
  let hiddenSum = 0;
  let numStr = '';

  for (let char of my_string) {
    if (!isNaN(char)) {
      numStr += char;
    } else {
      if (numStr !== '') {
        hiddenSum += parseInt(numStr);
        numStr = '';
      }
    }
  }

  if (numStr !== '') {
    hiddenSum += parseInt(numStr);
  }

  return hiddenSum;
}
