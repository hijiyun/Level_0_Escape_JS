function solution(age) {
  var answer = '';
  let alpa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alpa[age[i]];
  }
  return answer;
}
