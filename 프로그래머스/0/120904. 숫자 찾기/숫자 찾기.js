function solution(num, k) {
    // 24.02.14 [Lv0 탈출]
    const num_arr = [...num.toString()].map(el => parseInt(el)).indexOf(k);
    return num_arr >= 0 ? num_arr + 1 : num_arr;
}