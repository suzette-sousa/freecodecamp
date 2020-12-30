# Title Case a Sentence
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Basic algorithm scripting


---


### What is asked

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
  
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


---


### What I answered

```javascript  
  
function titleCase(str) {
  let newStr = str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
  return newStr;
}

titleCase("sHoRt AnD sToUt");

  

```

---


### Tests passed

✓ titleCase("I'm a little tea pot") should return a string.

✓ titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

✓ titleCase("sHoRt AnD sToUt") should return Short And Stout.

✓ titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
