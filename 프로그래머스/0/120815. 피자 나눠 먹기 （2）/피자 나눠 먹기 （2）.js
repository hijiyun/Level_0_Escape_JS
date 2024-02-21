function solution(n) {
    let total = 1;
    while ((total * 6) % n !== 0) {
        total++;
    }
    return total;
}