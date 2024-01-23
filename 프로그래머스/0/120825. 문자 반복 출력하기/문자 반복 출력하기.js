function solution(my_string, n) {
    let repeatLength = '';
    for (let i = 0; i < my_string.length; i++) {
        repeatLength += my_string[i].repeat(n);
    }
    return repeatLength;
}