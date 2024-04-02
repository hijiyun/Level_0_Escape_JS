function solution(my_string) {
    let answer = 0;
    let str = my_string.replace(/[a-zA-Z]/g, " ").split(" ").filter(item => item);
    for(i = 0; i < str.length; i++)
        answer += Number(str[i]);
    return answer;
}