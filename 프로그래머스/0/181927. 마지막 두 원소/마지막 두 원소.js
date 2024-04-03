function solution(num_list) {
    // 24.04.02 [알고리즘 한숟갈]
    const answer = num_list;
    const lastNum = num_list[num_list.length - 1]
    const preNum = num_list[num_list.length - 2]
    const addNum = lastNum > preNum ? lastNum - preNum : lastNum * 2
    return answer.concat(addNum);
}