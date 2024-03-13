function solution(balls, share) {
    const balls_sum = Array(share).fill().map((v , i) => balls - i).reduce((pre, cur, i) => (pre / (i + 1)) * cur);
    return Math.trunc(balls_sum);    
}
