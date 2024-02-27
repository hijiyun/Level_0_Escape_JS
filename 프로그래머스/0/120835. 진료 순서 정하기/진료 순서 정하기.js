function solution(emergency) {
    const copy = [...emergency].sort((a, b) => (b - a));
    return emergency.map(item => copy.indexOf(item) + 1);
}