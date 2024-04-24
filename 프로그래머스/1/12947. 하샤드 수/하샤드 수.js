function solution(x) {
    const HashadNum = [...(x + '')].reduce((acc, cur) => +acc + +cur);
    return x % HashadNum === 0 ? true : false;
}