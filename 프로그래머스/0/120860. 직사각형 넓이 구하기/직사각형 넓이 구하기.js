function solution(dots) {
    dots.sort((a, b) => b[0] - a[0])
    
    const row = Math.abs(dots[0][0] - dots[2][0]);
    const col = Math.abs(dots[0][1] - dots[1][1]);
    
    return row * col
}