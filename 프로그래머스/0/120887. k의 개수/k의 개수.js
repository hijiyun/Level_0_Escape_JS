function solution(i, j, k) {
    let string = '';
    for(i; i <= j; i++) {
        string += i
    }
    return string.split(k).length-1
}