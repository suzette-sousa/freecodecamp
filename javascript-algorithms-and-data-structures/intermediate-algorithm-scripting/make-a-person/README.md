# Make a Person
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Make a Person


---


### What is asked

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.


#### Script to complete

```javascript  
  
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
  

```

---


### What I answered

```javascript  
  
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(newFirstName) {
    fullName = newFirstName + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(newLastName) {
    fullName = fullName.split(" ")[0] + " " + newLastName;
  };
  this.setFullName = function(newFullName) {
    fullName = newFullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
  

```

---


### Tests passed

✓ Object.keys(bob).length should return 6.

✓ bob instanceof Person should return true.

✓ bob.firstName should return undefined.

✓ bob.lastName should return undefined.

✓ bob.getFirstName() should return "Bob".

✓ bob.getLastName() should return "Ross".

✓ bob.getFullName() should return "Bob Ross".

✓ bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").

✓ bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").

✓ bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").

✓ bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").

✓ bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
