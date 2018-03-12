var Calc, calc1;

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
