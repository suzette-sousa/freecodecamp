# Understand the Constructor Property
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Object Oriented Programming: Understand the Constructor Property


---


### What is asked

Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.


#### Script to complete

```javascript  
  
function Dog(name) {
  this.name = name;
}

// Only change code below this line
  

```

---


### What I answered

```javascript  
  
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}


```

---


### Tests passed

✓ joinDogFraternity should be defined as a function.

✓ joinDogFraternity should return true ifcandidate is an instance of Dog.

✓ joinDogFraternity should use the constructor property.
