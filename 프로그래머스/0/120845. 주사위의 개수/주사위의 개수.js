function solution(box, n) {
  let answer = 1;
  let tmp = [];
  for (let x of box) {
    tmp.push(Math.floor(x / n));
  }
  for (let x of tmp) {
    answer = answer * x;
  }
  return answer;
}