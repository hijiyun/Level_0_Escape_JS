function solution(num_list, n) {
    const multi_arr = [];
    
    for(let i = 0; i < num_list.length; i += n) {
        multi_arr.push(num_list.slice(i, i + n));
    }
    
    return multi_arr;
}