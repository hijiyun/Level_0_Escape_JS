function solution(x) {
        let num = 0;
        let originalX = x;
        while (x > 0) {
        num += x % 10; 
        x = Math.floor(x / 10);
        }
        return originalX % num == 0 ? true : false;
}