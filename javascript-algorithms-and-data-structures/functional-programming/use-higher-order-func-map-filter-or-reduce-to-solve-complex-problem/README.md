# Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem


---


### What is asked

We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

#### Script to complete

```javascript  
  
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
  

```

---


### What I answered

```javascript  
  
const squareList = arr => {
  // Only change code below this line
  let newArr = [];
  arr
    .filter(nb => nb > 0 && Number.isInteger(nb))
    .map(nb => newArr.push(nb * nb))
  return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
  

```

---


### Tests passed

✓ squareList should be a function.

✓ for, while, and forEach should not be used.

✓ map, filter, or reduce should be used.

✓ The function should return an array.

✓ squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].

✓ squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].