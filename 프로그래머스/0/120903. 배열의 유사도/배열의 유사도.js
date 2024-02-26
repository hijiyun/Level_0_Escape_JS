function solution(s1, s2) {
    let arr = [];
    for(i = 0; i < s2.length; i++){
        arr.push(...s1.filter((v) => v === s2[i]));
    }
    return arr.length
}
