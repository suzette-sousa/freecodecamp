# Add Methods After Inheritance
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Add Methods After Inheritance


---


### What is asked

Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.

#### Script to complete

```javascript  
  
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

// Only change code above this line

let beagle = new Dog();
  

```

---


### What I answered

```javascript  
  
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();
  

```

---


### Tests passed

✓ Animal should not respond to the bark() method.

✓ Dog should inherit the eat() method from Animal.

✓ Dog should have the bark() method as an own property.

✓ beagle should be an instanceof Animal.

✓ The constructor for beagle should be set to Dog.

✓ beagle.eat() should log "nom nom nom"

✓ beagle.bark() should log "Woof!"