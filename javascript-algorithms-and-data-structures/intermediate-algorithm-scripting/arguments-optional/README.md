# Arguments Optional
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Arguments Optional


---


### What is asked

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.


#### Script to complete

```javascript  
  
function addTogether() {
  return false;
}

addTogether(2,3);
  

```

---


### What I answered

```javascript  
  
function addTogether() {
  const firstArg = arguments[0];
  let scdArg = arguments[1];

  if(typeof(firstArg) !== "number" || (scdArg && typeof scdArg !== 'number')) {
    return undefined;
  }
  if(!scdArg) {
    return addArg => addTogether(firstArg, scdArg ? scdArg : scdArg = addArg)
  }
  return firstArg + scdArg;
}

addTogether(5)(7);
  

```

---


### Tests passed

✓ addTogether(2, 3) should return 5.

✓ addTogether(23, 30) should return 53.

✓ addTogether(5)(7) should return 12.

✓ addTogether("http://bit.ly/IqT6zt") should return undefined.

✓ addTogether(2, "3") should return undefined.

✓ addTogether(2)([3]) should return undefined.