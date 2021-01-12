# Combine an Array into a String Using the join Method
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Combine an Array into a String Using the join Method


---


### What is asked

Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

#### Script to complete

```javascript  
  
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
  

```

---


### What I answered

```javascript  
  
function sentensify(str) {
  // Only change code below this line
  let newStr = str.split(/[^a-z]/gi).join(" ");
  return newStr;
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
  

```

---


### Tests passed

✓ Your code should use the join method.

✓ Your code should not use the replace method.

✓ sentensify("May-the-force-be-with-you") should return a string.

✓ sentensify("May-the-force-be-with-you") should return "May the force be with you".

✓ sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".

✓ sentensify("There,has,been,an,awakening") should return "There has been an awakening".