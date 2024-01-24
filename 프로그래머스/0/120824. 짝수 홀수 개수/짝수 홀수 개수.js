function solution(num_list) {
    let odd = (num_list.filter(el => el % 2)).length;
    let even = num_list.length - odd;
    return [even, odd];
}