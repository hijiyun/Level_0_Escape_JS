function solution(emergency) {
    let arr = [...emergency].sort((a, b) => b - a)
    return emergency.map((item) => arr.indexOf(item) + 1)
}

/*
function solution(emergency) {
    let answer = [];
    for(let i = 0; i < emergency.length; i++){
        answer[i] = 1;
        for(let j = 0; j < emergency.length; j++)
            if (emergency[j] > emergency[i]) answer[i]++;
    }
    return answer;
}
*/