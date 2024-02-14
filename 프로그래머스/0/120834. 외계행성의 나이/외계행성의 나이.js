function solution(age) {
    // 24.02.15 [Lv0 탈출]
    const alienAge = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let myAlienAge = [];
    return [...String(age)].map((el) => myAlienAge = alienAge[el]).join('');
}