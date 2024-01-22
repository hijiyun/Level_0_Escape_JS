function solution(num_list) {
    let answer = [];
    let even = 0; //짝수
    let odd = 0; //홀수
    for(i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 == 0){
            even += 1;
        } else odd += 1;
    }
    answer = [even, odd]
    return answer;
}

