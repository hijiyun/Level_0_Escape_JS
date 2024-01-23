function solution(num_list) {
    let total = [0, 0];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            total[0] += 1;
        } else {
            total[1] += 1;
        }
            
    }
    
    return total;
}