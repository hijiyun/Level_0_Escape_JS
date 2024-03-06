function solution(score) {
  let average = score.map((arr) => (arr[0] + arr[1]) / 2)
  let sort = average.slice().sort((a, b) => b - a)
  return average.map((item)=>sort.indexOf(item) + 1)
}