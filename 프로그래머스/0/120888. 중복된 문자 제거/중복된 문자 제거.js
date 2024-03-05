function solution(my_string) {
  let arrStr = my_string.split("");

  for (let i = 0; i < arrStr.length; i++) {
    const duplWord = arrStr[i];
    for (let j = i + 1; j < arrStr.length; j++) {
      if (duplWord === arrStr[j]) {
        arrStr[j] = "";
      }
    }
  }

  const result = arrStr.join("");

  return result;
}