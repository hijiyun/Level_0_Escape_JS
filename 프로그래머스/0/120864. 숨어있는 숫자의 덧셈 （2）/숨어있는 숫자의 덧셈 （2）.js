function solution(my_string) {
    const num_arr = my_string.match(/\d+/g) || [];
    const sum = num_arr.reduce((acc, cur) => acc + Number(cur), 0);
    return sum;
}