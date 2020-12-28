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

console.log(bouncer([7, "ate", "", false, null]));

