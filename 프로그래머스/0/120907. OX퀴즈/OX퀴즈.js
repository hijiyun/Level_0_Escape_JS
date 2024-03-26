function solution(quiz) {
    return quiz.map((i) => {
        const [left, right] = i.split('=');
        const [X, operator, Y] = left.split(' ');
        
        return operator === '+' 
            ? +X + +Y === +right ? 'O' : 'X' 
            : +X - +Y === +right ? 'O' : 'X';
    })
}
