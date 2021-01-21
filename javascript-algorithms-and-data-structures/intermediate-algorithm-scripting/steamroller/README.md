# Steamroller
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Steamroller


---


### What is asked

Flatten a nested array. You must account for varying levels of nesting


#### Script to complete

```javascript  
  
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
  

```

---


### What I answered

```javascript  
  
function steamrollArray(arr) {
  let flatArr = arr => [].concat.apply([], arr.map(i => Array.isArray(i) ? flatArr(i) : i))
  return flatArr(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);
  

```

---


### Tests passed

✓ steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

✓ steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

✓ steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

✓ steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

✓ Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.