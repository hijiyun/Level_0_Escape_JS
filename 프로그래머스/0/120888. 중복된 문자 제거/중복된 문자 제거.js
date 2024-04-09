function solution(my_string) {
    return answer = [...my_string].filter((v, i) => [...my_string].indexOf(v) === i).join('');
}