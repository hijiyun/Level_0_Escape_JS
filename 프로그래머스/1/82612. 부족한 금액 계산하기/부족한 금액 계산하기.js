function solution(price, money, count) {
    let sum = 0
    for (let i = 1; i <= count; i++) {
        sum += price * i
    }
    let rest = sum - money;
    return rest <= 0 ? 0 : rest;
}