function solution(numbers) {
    const arr = Array.from({length: 10}, (_, i) => i);
    return arr.filter(i => !numbers.includes(i)).reduce((acc, cur) => acc + cur, 0);
}