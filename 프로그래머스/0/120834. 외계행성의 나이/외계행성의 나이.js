function solution(age) {
    const str = 'abcdefghij';
    const num = age.toString().split("").map((el) => Number(el));
    return num.map((el) => str[el]).join("");
}