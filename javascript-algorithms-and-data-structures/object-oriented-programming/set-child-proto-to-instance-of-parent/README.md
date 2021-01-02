# Set the Child's Prototype to an Instance of the Parent
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent


---


### What is asked

Modify the code so that instances of Dog inherit from Animal.


#### Script to complete

```javascript  
  
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

let beagle = new Dog();
  

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

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();


```

---


### Tests passed

✓ Dog.prototype should be an instance of Animal.
