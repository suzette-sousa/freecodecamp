# Use an IIFE to Create a Module
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Use an IIFE to Create a Module


---


### What is asked

Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

#### Script to complete

```javascript  
  
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
  

```

---


### What I answered

```javascript  
  
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
  

```

---


### Tests passed

✓ funModule should be defined and return an object.

✓ funModule.isCuteMixin should access a function.

✓ funModule.singMixin should access a function.