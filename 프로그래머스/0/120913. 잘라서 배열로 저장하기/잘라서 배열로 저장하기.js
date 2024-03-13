function solution(my_str, n) {
    const multi_arr = [];
    
    for(let i = 0; i < my_str.length; i += n) {
        multi_arr.push(my_str.slice(i, i + n))
    }
    
    return multi_arr;
}