function solution(before, after) {
  before = [...before].sort();
  after = [...after].sort();
  
  for (let i = 0; i < before.length; i++) {
      if (before[i] !== after[i]) return 0;
  }
  return 1;
}

/*
function solution(before, after) {
  let status = 0;
  const arrBefore = before.split("");
  const arrAfter = after.split("");

  for (let i = 0; i < arrBefore.length; i++) {
    for (let j = 0; j < arrAfter.length; j++) {
      if (arrBefore[i] === arrAfter[j]) {
        arrBefore[i] = "";
        arrAfter[j] = "";
      }
    }
  }

  if (arrBefore.join("").length === 0) status = 1;

  return status;

*/