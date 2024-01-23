function solution(my_string, n) {
    let arr = my_string.split('')
    let result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i].repeat(n));
    }
    return result.join('');
}