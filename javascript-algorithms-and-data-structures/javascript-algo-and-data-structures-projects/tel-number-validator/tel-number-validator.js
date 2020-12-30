function telephoneCheck(str) {
  const regex = /^[1]?[' ']?(\([0-9]{3}\)|[0-9]{3})[-]?[' ']?[0-9]{3}[' ',-]?[0-9]{4}$/g;
  const testRegex = regex.test(str);
  return testRegex; 
}

console.log(telephoneCheck("1 (555)555-5555"));
