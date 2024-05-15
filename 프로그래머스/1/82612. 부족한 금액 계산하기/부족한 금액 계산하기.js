function solution(price, money, count) {
    const amountPerUse = Array(count).fill().map((_, idx) => (idx + 1) * price);
    const amountPrice = amountPerUse.reduce((acc, cur) => acc + cur, 0);
    const shortFall = money - amountPrice;
    return shortFall > 0 ? 0 : Math.abs(shortFall);
}