function solution(a, b) {
    //그냥 소수점자릿수가 15까지 가면 유한소수로 판별
    return (a / b).toFixed(10) == (a / b) ? 1 : 2;
}