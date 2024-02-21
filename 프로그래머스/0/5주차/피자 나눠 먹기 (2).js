function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i += 1) {
    if ((i * 6) % n === 0) {
      return answer = i;
    }
  }
  return answer;
}

/*
function solution(n) {
  let answer = 0;
  if (n % 6 === 0) {
    answer = n / 6;
  } else if (n % 2 === 0) {
    answer = n / 2;
  } else if (n % 3 === 0) {
    answer = n / 3;
  } else {
    answer = n;
  }
  return answer;
}
*/