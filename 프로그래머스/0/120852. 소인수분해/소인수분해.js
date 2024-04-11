function solution(n) {
    
    const isPrime = (n) => {
      if (n === 1) return false;
      for (let i = 2; i < n; i++) {
          if (n % i === 0) return false;
      }
      return true;
    }
    
      let arr = [];
      let num = n;
    
      for (let i = 2; i <= num; i++) {
          if (isPrime(i) && Number.isInteger(num / i)) {
              arr.push(i);
              num /= i;
          }
      }
      return arr;
    }