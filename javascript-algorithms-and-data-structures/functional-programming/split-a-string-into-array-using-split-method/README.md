# Split a String into an Array Using the split Method
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Functional Programming: Split a String into an Array Using the split Method


---


### What is asked

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

#### Script to complete

```javascript  
  
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");
  

```

---


### What I answered

```javascript  
  
function splitify(str) {
  // Only change code below this line
  let newStr = str.split(/[^a-z]/gi);
  return newStr;
  // Only change code above this line
}
splitify("Hello World,I-am code");
  

```

---


### Tests passed

✓ Your code should use the split method.

✓ splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].

✓ splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].

✓ splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].