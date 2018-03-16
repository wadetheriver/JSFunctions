// module
// can be invoked anywhere, see index.html
var wade;

wade = (function() {
  return {
    speak: function() {
      console.log("this: ", this);
      return console.log("hello");
    }
  };
})();

wade.speak();
