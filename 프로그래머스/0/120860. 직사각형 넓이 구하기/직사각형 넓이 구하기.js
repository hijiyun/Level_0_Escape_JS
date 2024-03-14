function solution(dots) {
    const x = dots.flat().filter((_, index) => index % 2 === 0)
    const y = dots.flat().filter((_, index) => index % 2 === 1)
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}