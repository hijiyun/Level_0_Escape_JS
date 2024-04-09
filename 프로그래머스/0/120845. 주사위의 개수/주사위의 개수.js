function solution(box, n) {
  let max = box.map((single) => Math.floor(single / n))
  return max.reduce((acc, cur) => acc * cur, 1)
}
