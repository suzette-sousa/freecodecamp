function getIndexToIns(arr, num) {
  if(arr.indexOf(num) === -1) {
    arr.push(num);
  }
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

