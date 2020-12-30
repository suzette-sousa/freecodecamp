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
