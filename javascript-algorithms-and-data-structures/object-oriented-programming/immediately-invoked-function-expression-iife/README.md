# Immediately Invoked Function Expression (IIFE)
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)


---


### What is asked

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

#### Script to complete

```javascript  
  
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
  

```

---


### What I answered

```javascript  
  
(function () {
  console.log("A cozy nest is ready");
})();
  

```

---


### Tests passed

✓ The function should be anonymous.

✓ Your function should have parentheses at the end of the expression to call it immediately.