function solution(x) {
  let arr = String(x).split("");
  let sum = arr.reduce((a, b) => Number(a) + Number(b));
  return x % sum === 0;
}