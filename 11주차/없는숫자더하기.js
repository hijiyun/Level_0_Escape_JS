function solution(numbers) {
  return 45 - numbers.reduce((acc, val) => acc + val, 0);
}
