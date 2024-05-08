function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return [...s].map((i) => Number(i)).every((i) => !isNaN(i)) ? true : false;
    }
    return false;
}