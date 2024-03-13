function solution(pNumber) {
  const lastNumber = pNumber.slice(pNumber.length - 4, pNumber.length);
  return '*'.repeat(pNumber.length - 4).concat(lastNumber);
}
