function solution(quiz) {
  const equalSign = quiz.map((v) => v.replace('=', '=='));
  return equalSign.map((v) => (eval(v) ? 'O' : 'X'));
}
