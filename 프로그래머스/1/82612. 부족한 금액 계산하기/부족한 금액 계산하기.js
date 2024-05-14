function solution(price, money, count) {
  let sum = 0;
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(price * i);
    sum = arr.reduce((a, b) => a + b);
  }
  return sum > money ? sum - money : 0;
}