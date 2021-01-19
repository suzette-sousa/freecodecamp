# Sum All Primes
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Sum All Primes


---


### What is asked

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

#### Script to complete

```javascript  
  
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
  

```

---


### What I answered

```javascript  
  
function sumPrimes(num) {
  let i = 0;
  let sum = 0;
  for (i; i <= num; i++){
    isPrime(i) ? sum += i : sum;
  }
  return sum;
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= (n/2); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
sumPrimes(10);
  

```

---


### Tests passed

✓ sumPrimes(10) should return a number.

✓ sumPrimes(10) should return 17.

✓ sumPrimes(977) should return 73156.