# Use Inheritance So You Don't Repeat Yourself
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself


---


### What is asked

The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

#### Script to complete

```javascript  
  
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
  

```

---


### What I answered

```javascript  
  
function Cat(name) {
  this.name = name;
}

function Bear(name) {
  this.name = name;
}

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
  

```

---


### Tests passed

✓ Animal.prototype should have the eat property.

✓ Bear.prototype should not have the eat property.

✓ Cat.prototype should not have the eat property.
