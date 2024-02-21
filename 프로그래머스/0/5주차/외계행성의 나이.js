function solution(age) {
  let answer = ''
  age = String(age)
  for (let x of age) {
    answer += String.fromCharCode(Number(x) + 97)
  }
  return answer
}
