function solution(num, total) {
    const center_num = Math.trunc(total / num);
    const start_num = center_num - Math.trunc((num - 1) / 2);
    const num_arr = Array(num).fill().map((_, index) => start_num + index);
    return num_arr;
}