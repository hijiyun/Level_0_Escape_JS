function solution(numbers) {
  let number = numbers.sort((a, b) => b - a);
  answer = number[0] * number[1];
  return answer;
}