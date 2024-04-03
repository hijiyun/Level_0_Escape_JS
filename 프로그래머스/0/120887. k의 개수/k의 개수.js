function solution(i, j, k) {
    const arr = [];
    for (let n = i; n <= j; n++) {
        arr.push(n);
    }
    return arr.join('').split('').filter(num => +num === k).length;
}