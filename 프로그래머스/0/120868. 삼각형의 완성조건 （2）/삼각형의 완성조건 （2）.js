function solution(sides) {
    const maxNumber = sides.reduce((acc, cur) => acc + cur) - 1;
    const minNumber = Math.max(...sides) - Math.min(...sides);
    return maxNumber - minNumber;
}