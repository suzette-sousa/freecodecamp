# Iterate Over All Properties
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Change the Prototype to a New Object


---


### What is asked

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

#### Script to complete

```javascript  
  
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  
};
  

```

---


### What I answered

```javascript  
  
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: () => {
    console.log('eat');
  },
  describe: () => {
    console.log('describe');
  }
};
  

```

---


### Tests passed

✓ Dog.prototype should be set to a new object.

✓ Dog.prototype should have the property numLegs.

✓ Dog.prototype should have the method eat().

✓ Dog.prototype should have the method describe().