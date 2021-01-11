# Remove Elements from an Array Using slice Instead of splice
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Remove Elements from an Array Using slice Instead of splice


---


### What is asked

Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.

#### Script to complete

```javascript  
  
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
  

```

---


### What I answered

```javascript  
  
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);
  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
  

```

---


### Tests passed

✓ Your code should use the slice method.

✓ Your code should not use the splice method.

✓ The inputCities array should not change.

✓ nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].