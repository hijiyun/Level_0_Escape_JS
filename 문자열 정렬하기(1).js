function solution(my_string) {
  return [...my_string]
    .map((item) => Number(item))
    .filter((item) => 0 <= item && 9 >= item)
    .sort((a, b) => a - b);
}
