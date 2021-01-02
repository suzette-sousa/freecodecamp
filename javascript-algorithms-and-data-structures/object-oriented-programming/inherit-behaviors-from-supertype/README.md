# Inherit Behaviors from a Supertype
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Inherit Behaviors from a Supertype


---


### What is asked

Use Object.create to make two instances of Animal named duck and beagle.

#### Script to complete

```javascript  
  
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
  

```

---


### What I answered

```javascript  
  
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
  

```

---


### Tests passed

✓ The duck variable should be defined.

✓ The beagle variable should be defined.

✓ The duck variable should be initialised with Object.create.

✓ The beagle variable should be initialised with Object.create.

✓ duck should have a prototype of Animal.

✓ beagle should have a prototype of Animal.