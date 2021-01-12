# Use the every Method to Check that Every Element in an Array Meets a Criteria
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria


---


### What is asked

Fill in the body of the add function so it uses currying to add parameters x, y, and z.

#### Script to complete

```javascript  
  
function add(x) {
  // Only change code below this line


  // Only change code above this line
}
add(10)(20)(30);
  

```

---


### What I answered

```javascript  
  
function add(x) {
  // Only change code below this line
  return y => z => x + y + z;
  // Only change code above this line
}
console.log(add(10)(20)(30));
  

```

---


### Tests passed

✓ add(10)(20)(30) should return 60.

✓ add(1)(2)(3) should return 6.

✓ add(11)(22)(33) should return 66.

✓ Your code should include a final statement that returns x + y + z.