function solution(score) {
  let avg = score.map((arr) => (arr[0] + arr[1]) / 2)
  let sorted = avg.slice().sort((a,b) => b-a)
  return avg.map((val)=>sorted.indexOf(val)+1)
}