function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    if (i % 3 == 0 || String(i).includes("3")) {
      n++;
      arr.pop();
    }
  }
  return arr.at(-1);
}