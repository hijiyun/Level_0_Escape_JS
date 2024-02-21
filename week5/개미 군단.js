function solution(hp) {
  const 장군개미 = 5;
  const 병정개미 = 3;
  const 일개미 = 1;
  let answer = 0;

  answer += Math.floor(hp / 장군개미);
  hp = hp % 장군개미;

  if (hp > 0) {
    answer += Math.floor(hp / 병정개미);
  }
  hp = hp % 병정개미;

  if (hp > 0) {
    answer += Math.floor(hp / 일개미);
  }
  hp = hp % 일개미;

  return answer;
}
