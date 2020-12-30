# Falsy Bouncer
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Basic algorithm scripting


---


### What is asked

Remove all falsy values from an array.
  
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  
Hint: Try converting each value to a Boolean.


---


### What I answered

```javascript  
  
function bouncer(arr) {
  let newArr = [];
  let i = 0;
  for(i in arr) {
    if(!!arr[i]) {
       newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, null]);
  

```

---


### Tests passed

✓ bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

✓ bouncer(["a", "b", "c"]) should return ["a", "b", "c"].

✓ bouncer([false, null, 0, NaN, undefined, ""]) should return [].

✓ bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
