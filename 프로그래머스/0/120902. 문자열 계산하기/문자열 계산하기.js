function solution(my_string) {
    // eval 사용안하고 푼 방법
    // const strSum = my_string.split(" ").reduce((acc, curr, i, arr) => {
    //     if (i === 0) {
    //         return acc + Number(curr);
    //     } else if (i % 2 === 0) {
    //         return arr[i - 1] === "+" ? acc + Number(curr) : acc - Number(curr);
    //     }
    //     return acc;
    // }, 0);
    // return strSum;
    
    // 24.03.28 [Lv0 탈출]
    return eval(my_string);
}