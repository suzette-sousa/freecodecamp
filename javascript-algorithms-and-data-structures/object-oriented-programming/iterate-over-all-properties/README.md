# Iterate Over All Properties
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Iterate Over All Properties


---


### What is asked

Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

#### Script to complete

```javascript  
  
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
  

```

---


### What I answered

```javascript  
  
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
  

```

---


### Tests passed

✓ The ownProps array should include "name".

✓ The prototypeProps array should include "numLegs".

✓ You should solve this challenge without using the built in method Object.keys().
