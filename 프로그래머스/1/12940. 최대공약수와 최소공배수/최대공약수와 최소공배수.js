function solution(n, m) {
  let answer = [];
  let arr = [];
  for (let i = 1; i <= 1000000; i++) {
    if (n % i === 0 && m % i === 0) arr.push(i); //공약수 배열에 담기
  }
  const max = arr[arr.length - 1]; //최대공약수
  const min = max * (n / max) * (m / max); //최소공배수
  answer.push(max, min);
  return answer;
}