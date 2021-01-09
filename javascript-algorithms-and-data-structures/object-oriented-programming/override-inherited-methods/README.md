# Override Inherited Methods
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Override Inherited Methods


---


### What is asked

Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

#### Script to complete

```javascript  
  
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
  

```

---


### What I answered

```javascript  
  
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
  

```

---


### Tests passed

✓ penguin.fly() should return the string "Alas, this is a flightless bird."

✓ The bird.fly() method should return "I am flying!"