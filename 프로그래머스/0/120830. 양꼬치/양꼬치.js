function solution(n, k) {
  let answer = 0;
  let drink = Math.trunc(n / 10);
  answer = (n * 12000) + ((k - drink) * 2000);
  return answer;
}