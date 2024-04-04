function solution(order) {
    return [...(order + '')].filter((el) => +el !== 0 && el % 3 === 0).length
}