//다른풀이들

function solution(a, b) {

  // 최대공약수 구하기
  let g = 1;
  for (let i = 1; i <= b; i++) {
      if (a % i === 0 && b % i === 0) g = i;
  }

  //분모의 약수를 2, 5를 나누기
  b = b / g;
  while (b % 2 === 0) b = b / 2; 
  while (b % 5 === 0) b = b / 5; 
  return b === 1 ? 1 : 2;
}