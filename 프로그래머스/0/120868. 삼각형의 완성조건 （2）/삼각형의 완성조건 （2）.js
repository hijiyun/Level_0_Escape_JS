function solution(sides) {
    const arr = sides.sort((a, b) => b - a);
    
    // 가장 긴 변이 배열 내 존재하는 경우
    // arr[1]
    // 나머지 한 변이 가장 긴 경우
    // arr[1] - 1
    
    return 2 * arr[1] - 1;
}