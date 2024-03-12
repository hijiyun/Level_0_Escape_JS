function solution(array) {
  return array.reduce((count, num) => {
    return (
      count +
      num
        .toString()
        .split('')
        .filter((el) => el === '7').length
    );
  }, 0);
}
