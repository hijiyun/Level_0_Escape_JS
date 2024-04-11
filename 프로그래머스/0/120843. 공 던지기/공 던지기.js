function solution(numbers, k) {
    let target = 1;
    for (let i = 0; i < k - 1; i++) {
        target += 2;
        if (target > numbers.length) {
            target -= numbers.length
        }
    }
    return target;
}