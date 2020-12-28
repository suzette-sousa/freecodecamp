function titleCase(str) {
  let newStr = str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
  return newStr;
}

console.log(titleCase("sHoRt AnD sToUt"));
