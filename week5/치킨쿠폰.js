function solution(chicken) {
    let serviceChicken = 0;
    
    while (chicken >= 10) {
        serviceChicken += Math.floor(chicken / 10);
        chicken = chicken % 10 + Math.floor(chicken / 10);
    }
    return serviceChicken;
}
