# Slice and Splice
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Basic algorithm scripting


---


### What is asked

You are given two arrays and an index.
  
Copy each element of the first array into the second array, in order.
  
Begin inserting elements at index n of the second array.
  
Return the resulting array. The input arrays should remain the same after the function runs.


---


### What I answered

```javascript  
  
function frankenSplice(arr1, arr2, n) {
  let newArray = [];
  newArray = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n, arr2.length)]
  return newArray;
}

frankenSplice([1, 2], ["a", "b"], 1);

  

```

---


### Tests passed

✓ frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

✓ frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

✓ frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

✓ All elements from the first array should be added to the second array in their original order.

✓ The first array should remain the same after the function runs.

✓ The second array should remain the same after the function runs.
