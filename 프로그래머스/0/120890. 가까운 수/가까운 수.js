function solution(array, n) {
  const minNumber = Math.min(...array.map(a => Math.abs(a - n)));
  return array.sort((a, b) => a - b).find(a => Math.abs(a - n) === minNumber);
}


// function solution(array, n) {
//     const minNumber = array.map(item => Math.abs(item - n)).sort((a, b) => a - b)[0];
//     return minNumber + n > n ? n - minNumber : n + minNumber
//     }