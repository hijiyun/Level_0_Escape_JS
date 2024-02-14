function solution(price) {
    let answer = 0;
    let discount = 0;
    
    if (price >= 500000) {
        discount =  price * 0.2;
    } else if(price >= 300000) {
        discount = price * 0.1;
    } else if(price >= 100000) {
        discount = price * 0.05;
    } else{
        discount = 0;
    }
    answer = Math.trunc(price - discount);
    return answer;
}

/*
function solution(price) {
    let answer = 0;
    
    if (price >= 500000) {
        answer = price - (price * 0.2);
    } else if(price >= 300000 && price < 500000){
        answer = price - (price * 0.1);
    } else if (price >= 100000 && price < 300000){
        answer = price - (price * 0.05);
    } else{
        answer = price;
    }
     return answer;
}
*/