function solution(my_string, n) {
  let result = '';
  for (let i = 0; i < myString.length; i++) {
      result += myString[i].repeat(n);
  }
  return result;
}