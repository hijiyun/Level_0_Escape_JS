function solution(ineq, eq, n, m) {
    // 이전 풀이
    // var answer = 0;
    // if (ineq === '>' && eq === '=') (n >= m) ? answer = 1 : answer;
    // else if (ineq === '<' && eq === '=') (n <= m) ? answer = 1 : answer;
    // else if (ineq === '>' && eq === '!') (n > m) ? answer = 1 : answer;
    // else if (ineq === '<' && eq === '!') (n < m) ? answer = 1 : answer;
    // else return answer
    // return answer
    
    // 24.03.29 [알고리즘 한숟갈]
    let result = 0;
    if (ineq === '>' && eq === '=') (n >= m) ? result = 1 : result;
    else if (ineq === '<' && eq === '=') (n <= m) ? result = 1 : result;
    else if (ineq === '>' && eq === '!') (n > m) ? result = 1 : result;
    else if (ineq === '<' && eq === '!') (n < m) ? result = 1 : result;
    return result;
}