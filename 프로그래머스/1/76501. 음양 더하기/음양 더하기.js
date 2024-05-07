function solution(absolutes, signs) {
    let arr = []
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            arr.push(absolutes[i])
        } else {
            arr.push(-1 * absolutes[i])
        }
    }
    return arr.reduce((acc, cur) => acc + cur, 0);
}