function solution(my_string) {
    const arr = [...my_string];
    let tem = '';
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(Number(arr[i]))) {
            tem += arr[i]
            while (!isNaN(Number(arr[i + 1]))) {
                tem += arr[i + 1]
                i++
            }
        }
        sum += Number(tem)
        tem = ''
    }
    return sum
}
    