function solution(my_string, num1, num2) {
    const arr = [...my_string];
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
    return arr.join('');
}

/*function solution(my_string, num1, num2) {
    const array = [...my_string]
    [array[num1], array[num2]] = [array[num2], array[num1]]
    return array.join('')
}*/