function solution(my_string) {
  return [...my_string]
    .filter((v) => !isNaN(v))
    .reduce((a, b) => Number(a) + Number(b));
}