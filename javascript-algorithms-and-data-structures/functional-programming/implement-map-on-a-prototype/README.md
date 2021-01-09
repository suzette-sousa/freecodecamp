# Implement map on a Prototype
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Implement map on a Prototype


---


### What is asked

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

#### Script to complete

```javascript  
  
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
  

```

---


### What I answered

```javascript  
  
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(i => newArray.push(callback(i)));
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);
  

```

---


### Tests passed

✓ new_s should equal [46, 130, 196, 10].

✓ Your code should not use the map method.