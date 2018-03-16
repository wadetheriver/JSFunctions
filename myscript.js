// module
// can be invoked anywhere, see index.html
var action;

action = (function() {
  var DEFAULTS;
  DEFAULTS = {
    say: "hello",
    speed: "fast"
  };
  return {
    speak: function() {
      var firstArg, statement;
      firstArg = arguments[0] || '';
      statement = firstArg.say || DEFAULTS.say;
      console.log(`Speaking: ${statement}`);
      // 'this' is the outer function object not this one!
      return this;
    },
    run: function() {
      var firstArg, running;
      firstArg = arguments[0] || '';
      running = firstArg.speed || DEFAULTS.speed;
      console.log(`Running... ${running}`);
      // 'this' is the outer function object not this one!
      return this;
    }
  };
})();

action.speak({
  say: "hello"
}).run({
  speed: "slow"
});
