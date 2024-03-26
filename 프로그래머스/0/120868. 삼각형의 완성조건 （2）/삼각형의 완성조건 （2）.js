function solution(sides) {
  let answer = [];
  let n = Math.min(...sides);
  let m = Math.max(...sides);
  let a = m - n;
  let b = m;

  while (a < m) {
    a++;
    answer.push(a);
  }

  while (b < m + n - 1) {
    b++;
    answer.push(b);
  }
  return answer.length;
}