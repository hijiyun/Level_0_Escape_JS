function solution(price) {
    const five = 500000;
    const three = 300000;
    const one = 100000;
    if (price >= five) return Math.trunc(price - price * 0.2);
    else if (price >= three) return Math.trunc(price - price * 0.1);
    else if (price >= one) return Math.trunc(price - price * 0.05);
    return price;
}