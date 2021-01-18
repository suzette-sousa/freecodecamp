# Search and Replace
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Search and Replace


---


### What is asked

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


#### Script to complete

```javascript  
  
function myReplace(str, before, after) {

  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
  

```

---


### What I answered

```javascript  
  
function myReplace(str, before, after) {
  const isUppFirstRegex = /^[A-Z]/;
  const isUppFirst = before.match(isUppFirstRegex);
  const afterLower = after.toLowerCase();
  const shiftUppAfter = [...after].shift().toUpperCase();
  const otherLetters = after.slice(1);
  
  let newAfter = "";
  isUppFirst !== null ? newAfter = newAfter.concat(shiftUppAfter + otherLetters) : newAfter = afterLower;
  let newStr = str.replace(before, newAfter);

  return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
  

```

---


### Tests passed

✓ myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".

✓ myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".

✓ myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".

✓ myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".

✓ myReplace("His name is Tom", "Tom", "john") should return "His name is John".

✓ myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".