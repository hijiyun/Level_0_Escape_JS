function solution(sides) {
    const sortedSides = sides.sort((a, b) => a - b);
    return sortedSides[2] < sortedSides[0] + sortedSides[1] ? 1 : 2;
}