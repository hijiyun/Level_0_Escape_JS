function solution(s) {
    let answer = '';
    let division = s.split(' ');  
    for (let i = 0; i<division.length; i++) {
        for (let j = 0; j<division[i].length; j++ )
        if(j % 2 === 0) {
           answer += division[i][j].toUpperCase();
        } else {
            answer += division[i][j].toLowerCase()
        }
        if (i < division.length - 1) {
        answer += ' ';
        }
    }
    return answer;
}