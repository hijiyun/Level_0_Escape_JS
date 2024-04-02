function solution(array, n) {
  let count = 0
  array.forEach((val)=>{val === n ? count++ : null})
  return count
}