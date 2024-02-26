function solution(rsp) {
    return[...rsp].map((i) => i === '2' ? 0 : i === '0' ? 5 : i === '5' ? 2 : null).join('');
}
