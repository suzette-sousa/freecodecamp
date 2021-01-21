# Drop it
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Drop it


---


### What is asked

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

#### Script to complete

```javascript  
  
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
  

```

---


### What I answered

```javascript  
  
function dropElements(arr, func) {
  let n;
  let newArr = [];
  let index;
  for (n of arr) {
    if(func(n)) {
      index = arr.indexOf(n);
      newArr.push(...arr.slice(index));
      break;
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
  

```

---


### Tests passed

✓ dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

✓ dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

✓ dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

✓ dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

✓ dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

✓ dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].