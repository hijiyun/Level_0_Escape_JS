function solution(hp) {
  let five = Math.floor(hp / 5);
  let three = Math.floor((hp % 5) / 3);
  let one = (hp % 5) % 3;
  return five + three + one;
}
