function solution(my_string) {
    return [...my_string].map((el) => {
        if (el == el.toLowerCase()) return el.toUpperCase()
        return el.toLowerCase()
    }).join('')
}