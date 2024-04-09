function solution(my_string) {
    const answer = my_string.split('').join('').replace(/[^0-9]/g,"");
    return [...answer].reduce((acc, cur) => acc + parseInt(cur), 0);
}