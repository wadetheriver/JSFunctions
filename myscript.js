//arguments
// an elegant way to increment in reverse on cs?
var plus, plusv2, plusv3;

plus = function() {
  var sum;
  console.log("plus v1");
  sum = 0;
  for (var i = arguments.length-1; i>=0; i--) {
    sum += arguments[i]
    };
  return sum;
};

console.log(plus("bird", 0, 1, 2, 3, 65));

//  iterate forward
plusv2 = function() {
  var argument, i, len, sum;
  console.log("plus v2");
  sum = 0;
  for (i = 0, len = arguments.length; i < len; i += 1) {
    argument = arguments[i];
    sum += argument;
  }
  return sum;
};

console.log(plusv2(0, 1, 2, 3, 65, "bird"));

// iterate reverse as in original js
plusv3 = function() {
  var argument, i, sum;
  console.log("plus v3");
  sum = 0;
  for (i = arguments.length - 1; i >= 0; i += -1) {
    argument = arguments[i];
    sum += argument;
  }
  return sum;
};

// type string not cast (see v1)
console.log(plusv3(0, 1, 2, 3, 65, "bird"));
