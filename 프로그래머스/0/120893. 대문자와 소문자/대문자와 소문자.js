function solution(my_string) {
    return answer = [...my_string].map(item => {
        if (item === item.toLowerCase())
        return item.toUpperCase()
        if (item === item.toUpperCase())
        return item.toLowerCase()
    }).join('')
}