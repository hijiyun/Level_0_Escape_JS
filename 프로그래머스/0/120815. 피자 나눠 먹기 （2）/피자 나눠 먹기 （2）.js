function solution(n) {
    // 24.02.15 [Lv0 탈출]
    const slice = 6;
    let pizza = 1;
    
    while(pizza) {
        if((pizza * slice) % n === 0) return pizza;
        pizza++;
    }
}