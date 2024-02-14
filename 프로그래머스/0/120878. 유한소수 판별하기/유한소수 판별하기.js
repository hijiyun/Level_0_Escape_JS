// function solution(a, b) {
//     const num = a < b ? a : b;
//     let arr = [];
    
//     for (let i = 1; i <= num; i++) {
//         if (a % i === 0 && b % i === 0) {
//             arr.push(i);
//         }
//     }
//     const GCD = Math.max(...arr);

//     const denom = b / GCD;

//     let factors = [];
//     for (let i = 2; i <= denom; i++) {
//         if (denom % i === 0) {
//             factors.push(i);
//         }
//     }
        
//     const primeFactors = factors.filter(i => {
//         if (i === 2) return true;
//         for (let j = 2; j < i - 1; j++) {
//             if (i % j === 0) {
//                 return false;
//             } return true;
//         }
//     });

//     return primeFactors.every(i => i === 2 || i === 5) ? 1 : 2;
// }

function solution(numer, denom) {
    // 분자와 분모의 최대공약수(GCD)를 구하는 함수
    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // 분자와 분모의 최대공약수를 구함
    const GCD = gcd(numer, denom);

    // 분모를 최대공약수로 나누어 기약분수를 만듦
    const reducedDenom = denom / GCD;

    // 분모의 인수가 2와 5로만 이루어져 있는지를 확인
    const factors = [];
    let tempDenom = reducedDenom;
    while (tempDenom > 1) {
        if (tempDenom % 2 === 0) {
            factors.push(2);
            tempDenom /= 2;
        } else if (tempDenom % 5 === 0) {
            factors.push(5);
            tempDenom /= 5;
        } else {
            // 2와 5 이외의 다른 소수가 분모에 있다면 무한소수로 판단하고 2를 반환
            return 2;
        }
    }

    // 2와 5로만 이루어진 소수가 분모에 있다면 유한소수로 판단하고 1을 반환
    return 1;
}
