# Use the every Method to Check that Every Element in an Array Meets a Criteria
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria


---


### What is asked

Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

#### Script to complete

```javascript  
  
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
  

```

---


### What I answered

```javascript  
  
function checkPositive(arr) {
  // Only change code below this line
  let checkArr = arr.some((arrVal) => arrVal > 0);
  return checkArr;
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
  

```

---


### Tests passed

✓ Your code should use the every method.

✓ checkPositive([1, 2, 3, -4, 5]) should return false.

✓ checkPositive([1, 2, 3, 4, 5]) should return true.

✓ checkPositive([1, -2, 3, -4, 5]) should return false.