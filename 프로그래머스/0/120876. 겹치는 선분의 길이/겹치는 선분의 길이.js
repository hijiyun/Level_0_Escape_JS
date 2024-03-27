function solution(lines) {
    const lineCoverage = new Array(201).fill(0);
    let overlapLength = 0;

    lines.forEach(line => {
        for (let i = line[0]; i < line[1]; i++) {
            lineCoverage[i + 100]++;
        }
    });

    overlapLength = lineCoverage.filter(val => val > 1).length;
    return overlapLength;
}