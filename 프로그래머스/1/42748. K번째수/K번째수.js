function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        const first = commands[i][0];
        const second = commands[i][1];
        const third = commands[i][2];
    answer.push((array.slice(first-1, second).sort((a,b)=>a-b))[third-1])
    }
    return answer;
}