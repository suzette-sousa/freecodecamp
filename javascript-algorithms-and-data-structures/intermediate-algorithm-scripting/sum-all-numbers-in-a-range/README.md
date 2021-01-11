# Sum All Numbers in a Range
FreecodeCamp - JavaScript Algorithms and Data Structures Certification - Intermediate Algorithm Scripting: Sum All Numbers in a Range


---


### What is asked

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


#### Script to complete

```javascript  

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);


```

---


### What I answered

```javascript  
  
function sumAll(arr) {
  let newArr = [];
  if(arr[0] > arr[1]) {
    arr.sort((a, b) => a - b);
  }
  while(arr[1] > arr[0]) {
    arr.map(() => {
      newArr.push(arr[0]++)
    })
  }
  let result = newArr.reduce((acc, nb) => acc + nb, 0);
  return result;
}

sumAll([10, 5]);
  

```

---


### Tests passed

✓ sumAll([1, 4]) should return a number.

✓ sumAll([1, 4]) should return 10.

✓ sumAll([4, 1]) should return 10.

✓ sumAll([5, 10]) should return 45.

✓ sumAll([10, 5]) should return 45.