# Sort an Array Alphabetically using the sort Method
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Sort an Array Alphabetically using the sort Method


---


### What is asked

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

#### Script to complete

```javascript  
  
function alphabeticalOrder(arr) {
  // Only change code below this line


  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  

```

---


### What I answered

```javascript  
  
function alphabeticalOrder(arr) {
  // Only change code below this line
  arr.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
  return arr;
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  

```

---


### Tests passed

✓ Your code should use the sort method.

✓ alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].

✓ alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].

✓ alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"]