function solution(num, k) {
  let str = num.toString();
  if (str.includes(k)) {
    return str.indexOf(k) + 1;
  } else {
    return -1;
  }
}

/*
function solution(num, k) {
  let str = num.toString();
  let ind = str.indexOf(k);
  if (ind === -1) {
      return ind;
  } else {
      return ind + 1;
  }
}
*/