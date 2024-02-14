function solution(chicken) {
    let re_coupon = chicken;
    let service = Math.trunc(re_coupon / 10);
    let count = service;
    
    while(re_coupon >= 10) {
        re_coupon = re_coupon % 10 + service;
        service = Math.trunc(re_coupon / 10);
        count += service;
    }
    return count;
}