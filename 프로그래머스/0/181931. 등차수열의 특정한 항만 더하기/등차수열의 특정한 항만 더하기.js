function solution(a, d, included) {
  return included.reduce((acc, cur, idx) => {
    if (cur) acc += a + idx * d;
    return acc;
  }, 0);
}