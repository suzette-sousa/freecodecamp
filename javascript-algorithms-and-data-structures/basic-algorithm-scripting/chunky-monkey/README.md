# Chunky Monkey
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Basic Algorithm Scripting: Chunky Monkey


---


### What is asked

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


#### Script to complete

```javascript  

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


```

---


### What I answered

```javascript  
  
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  while(i <= arr.length) {
    newArr.push(arr.splice(0, size))
    i++;
  }
  if(arr.length != 0) {
    newArr.push(arr);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
  

```

---


### Tests passed

✓ chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

✓ chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

✓ chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

✓ chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

✓ chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

✓ chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

✓ chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].