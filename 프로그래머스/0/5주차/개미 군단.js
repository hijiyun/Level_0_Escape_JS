function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
  return first + second + third;
}

/*
function solution(hp) {
  let answer = 0;
  let resHp = 0;

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      answer += Math.floor(hp / 5);
      resHp = hp % 5;
    }
    if (i == 1) {
      answer += Math.floor(resHp / 3);
      resHp = resHp % 3;
    }
    if (i == 2) {
      answer += Math.floor(resHp / 1);
      resHp = resHp % 1;
    }
  }
  return answer;
}
*/