function solution(n) {
    const slice = 6;
    let pizza = 1;
    
    while(pizza) {
        if((pizza * slice) % n === 0) return pizza;
        pizza++;
    }
}

