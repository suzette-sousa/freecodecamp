# Spinal Tap Case
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Spinal Tap Case


---


### What is asked

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


#### Script to complete

```javascript  
  
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
  

```

---


### What I answered

```javascript  
  
function spinalCase(str) {
  let newStr = str.replace(/([a-z\d])([A-Z])/g, '$1-$2').replace(/[" ",_]/g, '-').toLowerCase();
  return newStr;
}

spinalCase('This Is Spinal Tap');
  

```

---


### Tests passed

✓ spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".

✓ spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".

✓ spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

✓ spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".

✓ spinalCase("AllThe-small Things") should return "all-the-small-things".