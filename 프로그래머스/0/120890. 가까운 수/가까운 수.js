function solution(array, n) {
  let min = 0;
  let arr = [];
  array.sort((a, b) => a - b).map((el, idx) => {
      if (el < n) arr[idx] = n - el;
      else arr[idx] = el - n;
  })
  
  min = Math.min(...arr);
  return array[arr.indexOf(min)];
}