# Return Part of an Array Using the slice Method
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Return Part of an Array Using the slice Method


---


### What is asked

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

#### Script to complete

```javascript  
  
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
  

```

---


### What I answered

```javascript  
  
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let newArray = anim.slice(beginSlice, endSlice);
  return newArray;
  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
  

```

---


### Tests passed

✓ Your code should use the slice method.

✓ The inputAnim variable should not change.

✓ sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].

✓ sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].

✓ sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].