function titleCase(str) {
  let newStr = str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
  return newStr;
}

console.log(titleCase("I'm a little tea pot"));
