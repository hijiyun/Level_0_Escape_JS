function solution(arr1, arr2) {
    return arr1.map((el, row) => el.map((val, col) => val + arr2[row][col]))
}