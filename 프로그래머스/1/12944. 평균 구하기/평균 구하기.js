function solution(arr) {
    return arr.reduce((acc, cur, i, {length}) => {
        return i === length - 1 ? (acc + cur) / length : (acc + cur)
    })
}