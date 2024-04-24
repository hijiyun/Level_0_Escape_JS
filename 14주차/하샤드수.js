function solution(x) {
  const xSum = x
    .toString()
    .split('')
    .map((str) => Number(str))
    .reduce((acc, val) => acc + val, 0);
  const isHarshad = Number.isInteger(x / xSum);
  return isHarshad;
}
