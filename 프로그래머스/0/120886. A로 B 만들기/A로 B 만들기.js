function solution(before, after) {
    const before_sort = [...before].sort().join('');
    const after_sort = [...after].sort().join('');
    return before_sort === after_sort? 1: 0;
}