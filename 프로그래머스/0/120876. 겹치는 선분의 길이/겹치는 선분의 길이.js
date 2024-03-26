function solution(lines) {
  let arr = new Array(200).fill(0);
  for (let i of lines) {
    let [a, b] = i;
    while (a < b) {
      a++;
      arr[a + 99]++;
    }
  }
  return arr.filter((v) => v > 1).length;
}