function solution(numbers) {
    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sum = numList.filter((el) => !numbers.includes(el)).reduce((acc, cur) => acc + cur, 0)
    return sum;
}