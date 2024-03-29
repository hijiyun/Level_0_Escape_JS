function solution(code) {
    let ret = '';
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        if (code[i] === "1") {
            mode = +(!mode);
        } else if (i % 2 === 0 && mode === 0) {
            ret += code[i];
        } else if (i % 2 === 1 && mode === 1) {
            ret += code[i];
        }
    }
    return ret || "EMPTY";
}