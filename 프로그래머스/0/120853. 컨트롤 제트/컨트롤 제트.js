function solution(s) {
    const arr = s.split(' ')
    return arr.map((i, idx) => i === 'Z' ? -arr[idx - 1] : i ).reduce((acc, cur) => acc + +cur, 0)
}