function solution(box, n) {
  let result = box.map((single) => Math.floor(single / n))
  return result.reduce((acc, cur)=>acc*cur, 1)
}