function solution(age) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return (answer =
    age.toString().length === 3
      ? alphabet[age.toString().split('')[0]] +
        alphabet[age.toString().split('')[1]] +
        alphabet[age.toString().split('')[2]]
      : age.toString().length === 2
      ? alphabet[age.toString().split('')[0]] +
        alphabet[age.toString().split('')[1]]
      : age.toString().length === 1
      ? alphabet[age.toString().split('')[0]]
      : 'baaa');
}
