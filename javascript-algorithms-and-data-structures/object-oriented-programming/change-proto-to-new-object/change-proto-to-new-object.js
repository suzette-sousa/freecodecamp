function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: () => {
    console.log('eat');
  },
  describe: () => {
    console.log('describe');
  }
};