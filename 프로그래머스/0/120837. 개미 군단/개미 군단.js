function solution(hp) {
    const generalAnt = Math.trunc(hp / 5);
    const soldierAnt = Math.trunc((hp - generalAnt * 5) / 3);
    const workerAnt = hp - generalAnt * 5 - soldierAnt * 3;
    return generalAnt + soldierAnt + workerAnt;
}