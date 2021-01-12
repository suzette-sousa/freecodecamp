# Return a Sorted Array Without Changing the Original Array
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Return a Sorted Array Without Changing the Original Array


---


### What is asked

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

#### Script to complete

```javascript  
  
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}
nonMutatingSort(globalArray);
  

```

---


### What I answered

```javascript  
  
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [].concat(arr);
  return newArr.sort((a, b) => a - b);
  // Only change code above this line
}
nonMutatingSort(globalArray);
  

```

---


### Tests passed

✓ Your code should use the sort method.

✓ The globalArray variable should not change.

✓ nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].

✓ nonMutatingSort(globalArray) should not be hard coded.

✓ The function should return a new array, not the array passed to it.