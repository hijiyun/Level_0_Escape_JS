function solution(array, height) {
  let answer = 0;
  for (let x of array) {
    if (x > height) {
      answer += 1;
    }
  }
  return answer;
}

/*
function solution(array, height) {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
            number++;
        }
    }
    return number;
}
*/