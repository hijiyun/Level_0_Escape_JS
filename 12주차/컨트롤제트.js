//이거 왤케 안풀리냐

// 아래 문제는 Z 제외하고 모두 더한거라서 틀림
// function solution(s) {
//     return s.split(" ")
//             .filter(item => item !== 'Z')
//             .reduce((acc, cur) => acc + parseInt(cur), 0);
// }

function solution(s) {
  s = s.split(' ');
  while (s.includes('Z')) {
    s.splice(s.indexOf('Z') - 1, 2);
  }
  return s.reduce((a, b) => a + Number(b), 0);
}
