function solution(num, k) {
    // 24.02.15 [Lv0 탈출]
    const num_arr = [...num.toString()].map(el => +(el)).indexOf(k);
    return num_arr >= 0 ? num_arr + 1 : num_arr;
}