function solution(my_string) {
    const arr = my_string.split(' ');
    
    const sum = arr.reduce((acc, cur, idx) => {
        if(isNaN(cur)) {
            return cur === '+' ? acc + +arr[idx + 1] : acc - +arr[idx + 1];
        }
        return acc;
    }, +arr[0]);
    return sum;
}
