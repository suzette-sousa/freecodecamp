# Iterate Over All Properties
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Reset an Inherited Constructor Property


---


### What is asked

Fix the code so duck.constructor and beagle.constructor return their respective constructors.

#### Script to complete

```javascript  
  
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
  

```

---


### What I answered

```javascript  
  
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
  

```

---


### Tests passed

✓ Bird.prototype should be an instance of Animal.

✓ duck.constructor should return Bird.

✓ Dog.prototype should be an instance of Animal.

✓ beagle.constructor should return Dog.