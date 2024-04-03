function solution(array) {
    let array_copy = array.slice();
    let max = array.sort((a, b) => b - a)[0]
    return [max, array_copy.indexOf(max)];
}