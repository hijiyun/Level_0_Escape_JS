function solution(s) {
    return s.split(' ').reduce((acc, cur, i, arr) => {
        return cur !== 'Z' ? +acc + +cur : acc - +arr[i-1];
    }, 0);
}