function solution(numbers) {
    const average = numbers.reduce((acc, cur, i, array) => {
        return i === array.length - 1 ? (acc + cur) / array.length : acc + cur; } , 0);
    return average;
}


    