function solution(s) {
    let array = s.split(" ");
    let answer_array = [];
    let answer = 0;
    
    while (array.length != 0) {
        let tmp = array.shift();
        if (tmp === "Z") {
            answer_array.pop();
        } else {
            answer_array.push(tmp);
        }
    };

    let number_answer_array = answer_array.map(Number);
    while (number_answer_array.length != 0) {
        answer += number_answer_array.shift();
    }
    return answer;
}