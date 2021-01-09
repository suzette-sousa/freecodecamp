# Avoid Mutations and Side Effects Using Functional Programming
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Avoid Mutations and Side Effects Using Functional Programming


---


### What is asked

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.
Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

#### Script to complete

```javascript  
  
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line

  // Only change code above this line
}

console.log(incrementer())
  

```

---


### What I answered

```javascript  
  
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  let newValue = fixedValue;
  newValue += 1;
  return newValue;
  // Only change code above this line
}

console.log(incrementer())
  

```

---


### Tests passed

✓ Your function incrementer should not change the value of fixedValue (which is 4).

✓ Your incrementer function should return a value that is one larger than the fixedValue value.

✓ Your incrementer function should return a value based on the global fixedValue variable value.
