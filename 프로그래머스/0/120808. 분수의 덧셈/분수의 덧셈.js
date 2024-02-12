//다른풀이

function solution(denum1, num1, denum2, num2){
  let answer = [];
  
  let bottom = num1 * num2;
  let top = (num1 * denum2) + (num2 * denum1);
  
  // 분모와 분자의 최대 공약수를 찾는다
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  let min = gcd(top, bottom);
  
  answer = [top / min, bottom / min];
  return answer;
}