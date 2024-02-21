function solution(emergency) {
    const emergencySort = emergency.slice().sort((a, b) => b - a);
    let emergencyList = emergency.map((el) => ((emergencySort.indexOf(el) + 1)));
    return emergencyList;
}