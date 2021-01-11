# Add Elements to the End of an Array Using concat Instead of push
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Add Elements to the End of an Array Using concat Instead of push


---


### What is asked

hange the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

#### Script to complete

```javascript  
  
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
  

```

---


### What I answered

```javascript  
  
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return [...original].concat(...newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
  

```

---


### Tests passed

✓ Your code should use the concat method.

✓ Your code should not use the push method.

✓ The first array should not change.

✓ The second array should not change.

✓ nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].