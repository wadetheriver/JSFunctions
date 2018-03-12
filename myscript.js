// return new object from function
var Calc, Dog, calc1, dog1;

Calc = function(num1 = 3, num2 = 4) {
  return {
    num1: num1,
    num2: num2,
    add: function(a, b) {
      // a=this.num1
      // b=this.num2
      console.log("this", this);
      console.log("numbers", this.num1, this.num2);
      console.log("args", arguments);
      return console.log(this.num1 + this.num2);
    }
  };
};

calc1 = new Calc(76, 24);

console.log(calc1.add());

// simple constructor
Dog = function() {};

dog1 = new Dog();

dog1.name = "Ellie";

dog1.breed = "Redbone";

dog1.info = function() {
  console.log("this", this);
  console.dir("dog1", dog1);
  return console.log(`dog1's name is ${dog1.name} and is a ${dog1.breed}`);
};

dog1.info();
