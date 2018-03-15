var barnabas, meowme, speak;

speak = function(sayWhat) {
  console.log(this);
  console.log(this.says);
  return console.log(sayWhat);
};

barnabas = {
  species: "cat",
  says: "meow"
};

speak.call(barnabas, barnabas.says);

speak.apply(barnabas, ["purr"]);

meowme = speak.bind(barnabas);

meowme();
