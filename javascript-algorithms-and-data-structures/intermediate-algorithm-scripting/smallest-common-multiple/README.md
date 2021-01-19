# Smallest Common Multiple
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Smallest Common Multiple


---


### What is asked

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

#### Script to complete

```javascript  
  
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
  

```

---


### What I answered

```javascript  
  
function smallestCommons(arr) {
  arr.sort((a, b) => a - b)
  let newArr = Array(arr[1] - arr[0] + 1).fill().map((_, index) => arr[0] + index);
  
  let multiple = newArr.reduce((a,b) => {
    for (let i = a; i <= a * b; i += a) {
      if (i % b === 0) return i;
    } 
  });

  return multiple;  
};

smallestCommons([2,10]);
  

```

---


### Tests passed

✓ smallestCommons([1, 5]) should return a number.

✓ smallestCommons([1, 5]) should return 60.

✓ smallestCommons([5, 1]) should return 60.

✓ smallestCommons([2, 10]) should return 2520.

✓ smallestCommons([1, 13]) should return 360360.

✓ smallestCommons([23, 18]) should return 6056820.