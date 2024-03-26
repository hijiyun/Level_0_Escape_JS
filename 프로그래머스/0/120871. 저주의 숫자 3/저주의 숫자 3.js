function solution(n) {
    let num = 0;
    
    for(let i = 1; i <= n; i++){
        num++;
        
        while(true){
            if(num % 3 === 0 || String(num).includes("3")){
                num++;
                continue;
            }
            break;
        }
    }
    
    return num;
}