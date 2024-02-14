function solution(n) {
    let factorial = 1;
    let i = 1;

    while (factorial <= n) {
        factorial *= i;
        if (factorial > n) {
            return i - 1;
        }
        i++;
    }
}
