function solution(my_string) {
  return [...my_string].map((el) => el.toLowerCase()).sort().join('');
}

/*
function solution(my_string) {
    let lower = my_string.toLowerCase().split('');
    lower.sort();
    return lower.join('')
}
*/