function solution(my_string, num1, num2) {
    let ans = [...my_string];
    ans.splice(num1, 1, my_string[num2]);
    ans.splice(num2, 1, my_string[num1]);
    return ans.join("");
}

/*
function solution(my_string, num1, num2) {
  let answer = '';
  let letter = [];
  let str = [];
  for (let i = 0; i < my_string.length; i += 1) {
    if (i === num1 || i === num2) {
      str.push(my_string[i]);
    }
  }
  for (let i = 0; i < my_string.length; i += 1) {
    if (i === num1) {
      answer += str[1];
    } else if (i === num2) {
      answer += str[0];
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
*/