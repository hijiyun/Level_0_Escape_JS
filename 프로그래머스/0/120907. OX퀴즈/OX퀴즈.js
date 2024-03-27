function solution(quiz) {
    return quiz.map((el) => {
        const [calculation, sum] = el.split(' = ');
        const calSum = eval(calculation);
        return calSum === Number(sum) ? 'O' : 'X';
    });
}