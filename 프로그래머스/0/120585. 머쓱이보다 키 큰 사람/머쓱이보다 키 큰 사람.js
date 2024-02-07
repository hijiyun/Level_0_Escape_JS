function solution(array, height) {
    let result = 0;
    array.forEach((h) => height < h ? result++ : null);
    return result;
}