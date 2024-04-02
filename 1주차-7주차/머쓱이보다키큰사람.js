function solution(array, height) {
  return array.filter((val)=> height < val).length 
}