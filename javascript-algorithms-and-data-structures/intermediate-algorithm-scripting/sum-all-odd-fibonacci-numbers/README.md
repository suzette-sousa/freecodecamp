# Sum All Odd Fibonacci Numbers
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers


---


### What is asked

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


#### Script to complete

```javascript  
  
function sumFibs(num) {
  return num;
}

sumFibs(4);
  

```

---


### What I answered

```javascript  
  
function sumFibs(num) {
  let i = 0;
  let fiboSeq = [1, 1];
  let sum = 0;

  while(i < num && fiboSeq[i] <= num) {
    fiboSeq.push(fiboSeq[i] + fiboSeq[i + 1]);
    fiboSeq[i] % 2 !== 0 ? sum += fiboSeq[i] : sum;
    i++;
  }
  return sum;
}

sumFibs(4);
  

```

---


### Tests passed

✓ sumFibs(1) should return a number.

✓ sumFibs(1000) should return 1785.

✓ sumFibs(4000000) should return 4613732.

✓ sumFibs(4) should return 5.

✓ sumFibs(75024) should return 60696.

✓ sumFibs(75025) should return 135721.