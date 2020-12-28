function frankenSplice(arr1, arr2, n) {
  let newArray = [];
  newArray = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n, arr2.length)]
  return newArray;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));
