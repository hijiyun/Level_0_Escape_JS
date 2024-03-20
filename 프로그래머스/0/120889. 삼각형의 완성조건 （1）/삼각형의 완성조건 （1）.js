function solution(sides) {
    const sides_sort = sides.sort((a, b) => b - a)
    return sides_sort[0] < sides_sort[1] + sides_sort[2] ? 1 : 2;
}