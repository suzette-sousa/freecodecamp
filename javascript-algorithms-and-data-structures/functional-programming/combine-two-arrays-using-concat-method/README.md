# Combine Two Arrays Using the concat Method
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Combine Two Arrays Using the concat Method


---


### What is asked

Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

#### Script to complete

```javascript  
  
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
  

```

---


### What I answered

```javascript  
  
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  let concatArray = [...original].concat(...attach);
  return concatArray;
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));
  

```

---


### Tests passed

✓ Your code should use the concat method.

✓ The first array should not change.

✓ The second array should not change.

✓ nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].