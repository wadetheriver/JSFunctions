// module
// can be invoked anywhere, see index.html
var wade;

wade = (function() {
  var DEFAULTS;
  DEFAULTS = {
    say: "hello"
  };
  return {
    speak: function() {
      var firstArg, statement;
      firstArg = arguments[0] || '';
      statement = firstArg.say || DEFAULTS.say;
      return console.log(`Wade Says: ${statement}`);
    }
  };
})();

wade.speak();
