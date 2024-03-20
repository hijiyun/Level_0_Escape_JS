function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

/*
function solution(my_string) {
  return [...my_string]
    .filter((v) => !["a", "e", "i", "o", "u"].includes(v))
    .join("");
}


function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < my_string.length; i++) {
    for (let v of vowel) my_string = my_string.replaceAll(v, "");
  }
  return my_string;
}


function solution(my_string) {
  let answer = "";
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < my_string.length; i++) {
    if (!vowel.includes(my_string[i])) answer += my_string[i];
  }
  return answer;
}


function solution(my_string) {
  let answer = '';
  for (let x of my_string) {
    if (x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u') {
      answer += x;
    }
  }
  return answer;
}
*/