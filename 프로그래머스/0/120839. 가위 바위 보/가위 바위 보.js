function solution(rsp) {
    return [...rsp].map((el) => el == 5 ? 2 : (el == 2 ? 0 : 5)).join('');
}