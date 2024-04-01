function solution(my_string) {
    return [...my_string].map((i) => 
                              i !== i.toUpperCase() 
                              ? i.toUpperCase() 
                              : i.toLowerCase()).join('');
}