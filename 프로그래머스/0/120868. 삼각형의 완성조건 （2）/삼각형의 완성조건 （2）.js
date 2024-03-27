function solution(sides) {
    let count = [];
    let count2 = [];
    
    sides.sort((a, b) => a - b)
    
    for (let i = sides[1] - sides[0] + 1; i <= sides[1]; i++) {
        count.push(i);
    }
    
    for (let j = sides[1] + sides[0] - 1; j > count[count.length - 1]; j--) {
        count2.push(j);
    }
    
    return count.length + count2.length;
}