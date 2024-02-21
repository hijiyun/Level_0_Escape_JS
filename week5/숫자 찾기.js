function solution(num, k) {
  return (answer = ('' + num).includes('' + k)
    ? ('' + num).indexOf('' + k) + 1
    : -1);
}
