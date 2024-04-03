function solution(num_list) {
    // 이전 풀이
    // var answer = 0;
    // const multi = num_list.reduce((acc, cur) => acc * cur)
    // const add = (num_list.reduce((acc, cur) => acc + cur, 0) ** 2)
    // answer = multi < add ? 1 : 0
    // return answer;
    
    // 24.04.02 [알고리즘 한숟갈]
    const multi = num_list.reduce((acc, cur) => acc * cur);
    const add = (num_list.reduce((acc, cur) => acc + cur, 0) ** 2);
    return multi < add ? 1 : 0;
}