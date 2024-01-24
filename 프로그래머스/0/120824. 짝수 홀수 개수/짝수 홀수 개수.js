function solution(num_list) {
    let arr = [];
    let even = 0;
    let odd = 0;
    
    for(list of num_list) {
        list % 2 === 0 ? even++ : odd++;
    }
    return arr = [even, odd];
}