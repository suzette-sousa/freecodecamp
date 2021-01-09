# Implement the filter Method on a Prototype
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Implement the filter Method on a Prototype


---


### What is asked

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

#### Script to complete

```javascript  
  
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
  

```

---


### What I answered

```javascript  
  
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach(i => callback(i) ? newArray.push(i): false);
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);
  

```

---


### Tests passed

✓ new_s should equal [23, 65, 5].

✓ Your code should not use the filter method.