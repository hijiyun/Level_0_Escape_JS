function solution(array, n) {
    const arrSort = array.slice().sort((a, b) => a- b);
    const distanceArr = arrSort.map((el) => Math.abs(el - n));
    const distanceSort = distanceArr.slice().sort((a, b) => a - b);
    const distanceIndex = distanceArr.indexOf(distanceSort[0]);
    const arrIndex = array.indexOf(arrSort[distanceIndex]);
    return array[arrIndex];
}