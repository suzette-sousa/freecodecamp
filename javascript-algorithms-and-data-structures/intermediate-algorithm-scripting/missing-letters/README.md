# Missing letters
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Missing letters


---


### What is asked

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


#### Script to complete

```javascript  
  
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
  

```

---


### What I answered

```javascript  
  
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sliceAlphabet = alphabet.slice(alphabet.indexOf(str[0]));
  let i = 0;
  while(i < sliceAlphabet.length && sliceAlphabet[i] === str[i]) {
    i++;
  }
  return sliceAlphabet[i];
}

fearNotLetter("stvwx");
  

```

---


### Tests passed

✓ fearNotLetter("abce") should return "d".

✓ fearNotLetter("abcdefghjklmno") should return "i".

✓ fearNotLetter("stvwx") should return "u".

✓ fearNotLetter("bcdf") should return "e".

✓ fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.