# Mutations
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Basic Algorithm Scripting: Mutations


---


### What is asked

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
  
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
  
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


---


### What I answered

```javascript  
  
function mutation(arr) {
  const set1 = new Set([...arr[0].toLowerCase()]);
  const set2 = new Set([...arr[1].toLowerCase()]);

  for (let elem of set2) {
    if (!set1.has(elem)) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
  

```

---


### Tests passed

✓ mutation(["hello", "hey"]) should return false.

✓ mutation(["hello", "Hello"]) should return true.

✓ mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.

✓ mutation(["Mary", "Army"]) should return true.

✓ mutation(["Mary", "Aarmy"]) should return true.

✓ mutation(["Alien", "line"]) should return true.

✓ mutation(["floor", "for"]) should return true.

✓ mutation(["hello", "neo"]) should return false.

✓ mutation(["voodoo", "no"]) should return false.

✓ mutation(["ate", "date"] should return false.

✓ mutation(["Tiger", "Zebra"]) should return false.

✓ mutation(["Noel", "Ole"]) should return true.